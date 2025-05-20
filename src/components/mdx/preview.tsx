"use client";
import { cn } from "@/lib/utils";
import PreviewContent from "./preview-content";

interface PreviewProps {
  children: React.ReactNode;
  className?: string;
  isPremium?: boolean;
  link: string;
  useIframe?: boolean;
  height?: string;
  compact?: boolean;
  comment?: string[];
  isBlock?: boolean;
}

const prePath = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://ui.codesnipet.com";

export function Preview({
  children,
  className = "",
  link,
  useIframe = false,
  compact = false,
  comment = [],
  isBlock = false,
}: PreviewProps) {
  console.log(prePath + link);
  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <PreviewContent link={link} prePath={prePath} isBlock={isBlock} />

      {useIframe ? (
        <div className="my-4 w-full rounded-2xl border border-zinc-400 dark:border-zinc-700">
          <div className="relative h-[100dvh] w-full overflow-hidden">
            <iframe
              title={link}
              src={`${prePath}/preview/${link}`}
              className="h-full w-full list-none overflow-y-auto"
              style={{
                border: "none",
                transform: "scale(0.95)",
              }}
            />
          </div>
        </div>
      ) : (
        <div
          className={cn(
            "not-prose relative my-4 flex items-center justify-center rounded-2xl border border-zinc-400 p-2 md:p-8 dark:border-zinc-800",
            compact ? "min-h-[100px]" : "min-h-[400px]",
            isBlock ? "md:p-0" : "",
          )}
        >
          {children}
        </div>
      )}
      {comment.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {comment.map((text, index) => (
            <div
              key={index}
              className="rounded-lg border border-purple-200 bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 shadow-xs transition-colors hover:bg-purple-200/70 dark:border-purple-800/50 dark:bg-purple-950/30 dark:text-purple-300 dark:hover:bg-purple-950/50"
            >
              {text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
