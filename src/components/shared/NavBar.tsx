import { LucideSquareArrowOutUpRight } from "lucide-react";

export const NavBar = () => {
  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="sticky text-lg top-0 flex w-full justify-between p-10 left-0 z-50">
      <h1 className="flex space-x-1">
        <div className="opacity-50">
          \<span>kalachuuchiiiii</span>\
        </div>
        <span>
          paris{">"}
          <span className="animate-pulse">_</span>
        </span>
      </h1>

      <div className="flex text-sm px-8 py-2 rounded-full backdrop-brightness-150 items-center justify-end gap-2 cursor-pointer"
           onClick={handleScrollToBottom}
      >
        Get In Touch <LucideSquareArrowOutUpRight size={20} />
      </div>
    </div>
  );
};
