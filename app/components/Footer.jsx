import { SocialsIcons } from "./SocialsIcons";

export const Footer = () => {
  return (
    <section className="u-center w-full">
      <div className="border-t-2 border-[var(--bg-hover)] " />
      <div className="u-center">
        <div className="flex flex-col items-center">
          <p className="text-4xl mt-10 font-bold">
            Gracias por visitar mi sitio web! 😊
          </p>
          <a
            href="#contactame"
            className="mt-10 font-bold text-2xl bg-[var(--bg-buttons)] text-[var(--text-buttons)] rounded flex items-center gap-2 justify-center h-16  w-56 hover:scale-110"
            aria-label="contactame"
          >
            Contactáme
          </a>
          <p className="mt-10">O también me puedes contactar a través de:</p>
          <ul className="m-5 flex gap-2">
            <SocialsIcons />
          </ul>
        </div>
        <p className="font-bold text-lg mb-2">
          Hecho con ❤️ por Gianluca D'Onofrio.
        </p>
      </div>
    </section>
  );
};
