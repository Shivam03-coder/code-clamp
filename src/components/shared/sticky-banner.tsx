import { StickyBanner } from "../ui/sticky-banner";

export default function Stickybanner() {
  return (
    <div className="relative flex w-full flex-col overflow-y-auto text-sm">
      <StickyBanner className="bg-sidebar-primary">
        <span className="text-lg">🚀</span>
        <p className="ml-3 max-w-[90%] text-white drop-shadow-md @md:text-justify">
          New components coming soon to our UI library! Stay tuned for updates.
          <a
            href="#"
            className="ml-3 rounded-sm border border-blue-500 bg-yellow-300 p-1 text-black transition duration-200 hover:underline"
          >
            Read announcement
          </a>
        </p>
      </StickyBanner>
    </div>
  );
}
