import { useEffect, useRef } from "react";
import { IconChevronUp } from "@tabler/icons";

export const ButtonToTop = () => {
  const buttonScrollTop = useRef(null);

  const scrollTop = () => {
    if (document.documentElement.scrollTop < 400) {
      buttonScrollTop.current?.classList.add("hidden");
    } else {
      buttonScrollTop.current?.classList.remove("hidden");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollTop);
    return () => {
      window.removeEventListener("scroll", scrollTop);
    };
  });

  return (
    <button
      onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
      ref={buttonScrollTop}
      className="hidden fixed  right-5 bottom-5 z-10 rounded-full p-2 text-white hover:scale-125 transition-all duration-300 ease-in-out bg-[var(--bg-buttons)]"
    >
      <IconChevronUp />
    </button>
  );
};
