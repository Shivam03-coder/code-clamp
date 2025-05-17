import { StickyBanner } from "../ui/sticky-banner";

export default function Stickybanner() {
  return (
    <div className="relative flex w-full flex-col overflow-y-auto text-sm">
      <StickyBanner className="bg-sidebar-primary">
        <span className="mobile text-lg">🚀</span>
        <p className="maxw ml-3 text-white leading-snug py-1 drop-shadow-md lg:max-w-[90%]">
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
