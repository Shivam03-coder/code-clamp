import { registry } from "../registry";
import { promises as fs } from "fs";
import type { z } from "zod";
import type { registryItemFileSchema } from "../registry/schema";
import path from "path";

const REGISTRY_BASE_PATH = path.join(process.cwd(), "src");
const PUBLIC_FOLDER_BASE_PATH = path.join(process.cwd(), "public", "r");

type File = z.infer<typeof registryItemFileSchema>;

/**
 * Ensures the directory exists and writes text data to a file.
 * @param absoluteFilePath The full path of the file to write.
 * @param textContent The string content to write into the file.
 */

export async function ensureWriteTextFile(
  absoluteFilePath: string,
  textContent: string,
): Promise<void> {
  const directoryPath = path.dirname(absoluteFilePath);

  try {
    // Ensure the directory exists
    await fs.mkdir(directoryPath, { recursive: true });

    // Write data to file using UTF-8 encoding
    await fs.writeFile(absoluteFilePath, textContent, "utf-8");

    console.log(`✅ File written successfully to ${absoluteFilePath}`);
  } catch (error) {
    console.error(`❌ Failed to write file to ${absoluteFilePath}`);
    console.error(error);
  }
}

/**
 * Reads and processes registry component files.
 *
 * @param inputFiles An array of file paths (string or objects with `.path`).
 * @param registryType A string indicating the registry type (e.g., "registry:hook", "registry:block").
 * @returns An array of file metadata with content, type, original path, and target path.
 */

export async function loadRegistryFiles(
  inputFiles: (string | { path: string })[],
  registryType: string,
): Promise<
  {
    type: string;
    content: string;
    path: string;
    target: string;
  }[]
> {
  const fileDataList = await Promise.all(
    (inputFiles ?? []).map(async (file) => {
      // Step 1: Normalize input path (handle string or object format)
      const inputPath = typeof file === "string" ? file : file.path;
      const normalizedPath = inputPath.startsWith("/")
        ? inputPath
        : `/${inputPath}`;

      // Step 2: Resolve absolute path from base
      const absolutePath = path.join(REGISTRY_BASE_PATH, normalizedPath);

      // Step 3: Read file content from filesystem
      const fileContent = await fs.readFile(absolutePath, "utf-8");

      // Step 4: Extract just the filename from the path (e.g., actionbar.tsx)
      const fileName = path.basename(normalizedPath);

      // Step 5: Determine where the file should be targeted based on registry type
      const resolveTargetPath = (type: string): string => {
        switch (type) {
          case "registry:hook":
            return `/hooks/${fileName}`;
          case "registry:lib":
            return `/lib/${fileName}`;
          case "registry:block":
            return `/blocks/${fileName}`;
          default:
            return `/components/code-clamp/${fileName}`;
        }
      };

      // Step 6: Return structured object
      return {
        type: registryType,
        content: fileContent,
        path: normalizedPath,
        target: resolveTargetPath(registryType),
      };
    }),
  );

  return fileDataList;
}


const main = async () => {
    for (let i = 0; i < registry.length; i++) {
        const component = registry[i];
        const files = component?.files;
        if (!files) throw new Error("No files found for component");

        const filesArray = await loadRegistryFiles(files, component.type);

        const json = JSON.stringify(
            {
                ...component,
                files: filesArray,
            },
            null,
            2
        );
        const jsonPath = `${PUBLIC_FOLDER_BASE_PATH}/${component.name}.json`;
        await ensureWriteTextFile(jsonPath, json);
        console.log(json);
    }
};

main()
    .then(() => {
        console.log("done");
    })
    .catch((err) => {
        console.error(err);
    });