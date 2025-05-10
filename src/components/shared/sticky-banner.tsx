import { StickyBanner } from "../ui/sticky-banner";

export default function Stickybanner() {
  return (
    <div className="relative flex w-full text-sm flex-col overflow-y-auto">
      <StickyBanner className="bg-sidebar-primary">
        <span className="text-lg">🚀</span>
        <p className="ml-3 max-w-[90%] text-white drop-shadow-md">
          New components coming soon to our UI library! Stay tuned for updates.
          <a href="#" className="transition border border-blue-500 bg-yellow-100 ml-3 text-black p-1 rounded-sm duration-200 hover:underline">
            Read announcement
          </a>
        </p>
      </StickyBanner>
    </div>
  );
}
