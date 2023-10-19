import { useEffect, useState } from "react";
import { IconSend, IconArrowBarToDown } from "@tabler/icons";
import { SocialsIcons } from "./SocialsIcons";

export const PanelHero = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    window.addEventListener("scroll", (e) => {
      const scroll =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      setScroll(scroll);
    });
  };

  useEffect(() => {
    handleScroll();
  }, [scroll]);

  return (
    <section
      id="panelHero"
      className="u-center h-screen w-full flex items-center justify-center relative hover:ease-in"
    >
      <div className="flex flex-col-reverse justify-center items-center h-full">
        <ul className="absolute lg:left-10 bottom-10 lg:flex-col flex gap-5 lg:gap-3 lg:bottom-0">
          <SocialsIcons />
          <div className="hidden w-2 h-16 mx-auto bg-[var(--socials-buttons)] lg:block" />
        </ul>
        <div className="flex flex-col font-bold text-2xl mt-3 gap-4 w-full items-center justify-center md:flex-row">
          <a
            href="#contactame"
            className="bg-[var(--bg-buttons)] text-[var(--text-buttons)] rounded flex items-center gap-2 justify-center h-16 w-56 hover:scale-110"
          >
            <IconSend className="h-6 w-6" />
            Contáctame
          </a>
          <a
            href="https://drive.google.com/drive/folders/14HEezWEgyIcWqDcJboZday1oUzzNpm7I?usp=share_link&pli=1"
            className="bg-[var(--bg-buttons)] text-[var(--text-buttons)] rounded flex items-center gap-2 justify-center h-16 w-56 hover:scale-110"
            target="_blank"
            rel="noreferrer"
          >
            <IconArrowBarToDown className="h-6 w-6" />
            Descargar CV
          </a>
        </div>
        <div className="flex flex-col items-center justify-center relative">
          <p className="text-xl md:text-2xl font-semibold">Hola 👋🏼, soy</p>
          <h1
            className="text-6xl md:text-9xl font-bold flex flex-col items-center animate-gradient"
            style={{
              background:
                "-webkit-linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5, #23d5ab)",
              backgroundSize: "250%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Gianluca
            <span>D'Onofrio.</span>
          </h1>
          <p className="text-xl p-3 text-center md:text-2xl font-semibold">
            Software Developer.
          </p>
        </div>
      </div>
    </section>
  );
};
