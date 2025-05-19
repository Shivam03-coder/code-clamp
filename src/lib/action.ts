"use server"
import path from "path";
import { promises as fs } from "fs";
import { cache } from "react";
export type CopyComponentState = {
  error: string;
  content: string;
  success: boolean;
};

export const copyComponent = async (
  prevState: CopyComponentState,
  formData: FormData,
): Promise<CopyComponentState> => {
  try {
    const folder = formData.get("folder") as string | null;
    const fileName = formData.get("fileName") as string | null;

    if (!fileName || !folder) {
      return {
        error: "Invalid folder or file name.",
        content: prevState.content,
        success: prevState.success,
      };
    }

    const content = await getContent({ fileName, folder });
    if (!content) {
      return {
        error: "Invalid folder or file name.",
        content: "",
        success: false,
      };
    }

    return {
      error: "",
      content,
      success: true,
    };
  } catch (error) {
    return {
      error: "Something went wrong.",
      content: "",
      success: false,
    };
  }
};

const getContent = async ({
  fileName,
  folder,
}: {
  fileName: string | null;
  folder: string;
}) => {
  const baseDir = path.join(process.cwd(), "components/codesnippetui");

  if (!fileName || fileName === "undefined") {
    const fullPath = path.join(baseDir, `${folder}.tsx`);
    return await readFileCache(fullPath);
  }

  console.log("here");
  const fullPath = path.join(baseDir, folder, `${fileName}.tsx`);
  return await readFileCache(fullPath);
};

const readFileCache = cache(async (fullPath: string) => {
  return await fs.readFile(fullPath, "utf-8");
});
