import React from "react";
import ThemeToggle from "../../components/global/theme-toggle";
import { Code, GithubIcon, Tag } from "lucide-react";
import { Link } from "next-view-transitions";
import { Badge } from "../../components/ui/badge";

const Header = () => {
  return (
    <div className="text-primary sticky top-0 left-0 z-50 mx-auto mt-0 flex w-full bg-zinc-200 lg:mt-2 lg:w-[85%] lg:rounded-xl dark:bg-zinc-900">
      <nav className="mx-auto flex flex-1 items-center justify-between rounded-b-3xl px-4 py-3">
        <div className="center gap-4">
          <span className="bg-primary text-card border-primary rounded-xl border p-2">
            <Code size={20} />
          </span>
          <span>
            <h4 className="font-mulish font-extrabold">Code-Clamp</h4>
            <p className="text-xs">UI component library</p>
          </span>
        </div>
        <div className="flex items-center justify-between gap-x-2">
          {/* GITHUB REPO */}
          <div className="mobile">
            <div className="flex items-center gap-x-2">
              <Link
                className="border-primary flex items-center gap-x-2 rounded-xl border px-2 py-1 text-sm"
                href={"/docs"}
              >
                Compoents
              </Link>
            </div>
          </div>
          <Link
            className="border-primary flex items-center gap-x-2 rounded-full border p-2 text-sm"
            href={"/https://github.com/Shivam03-coder/code-clamp"}
          >
            <GithubIcon className="h-5 w-5" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
