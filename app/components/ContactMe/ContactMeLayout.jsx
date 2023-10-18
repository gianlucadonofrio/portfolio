import { Form } from "./Form";
import { IconMail } from "@tabler/icons";

export const ContactMeLayout = () => {
  return (
    <section className="u-center w-full">
      <div className="border-t-2 border-[var(--bg-hover)] mt-24"></div>
      <section
        id="contactame"
        className="u-center flex flex-col items-center justify-center md:flex-row md:justify-between relative min-h-screen max-w-6xl mx-auto"
      >
        <div className="w-full  md:w-2/4 justify-center  ">
          <h1 className="flex flex-col justify-center items-center md:items-start w-full font-semibold text-xl md:text-2xl ">
            Ahora o nunca!
            <span className="bg-[var(--bg-buttons)] text-4xl font-bold rounded-md p-3 w-fit relative text-white mt-2 md:text-5xl lg:text-6xl">
              Contactáme.&#160;
              <span className="absolute right-0 w-0 bg-[var(--bg-buttons)] border-l-4 animate-writing">
                &#160;
              </span>
            </span>
          </h1>
          <p className="mt-2 p-2 text-xl text-start">
            Si quieres contactarme conmigo, puedes hacerlo a través de las redes
            sociales o llenando el formulario de contacto. Te responderé lo
            antes posible. ¡Gracias! 😊
          </p>
          <a
            href="mailto:gian.donofrio2000@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="email"
            className="flex gap-2 items-center justify-center md:justify-start text-xl mt-3"
          >
            <IconMail className="h-8 w-8" />
            <p className="font-bold">gian.donofrio2000@gmail.com</p>
          </a>
        </div>
        <div className="w-full md:w-2/4 justify-center items-center ">
          <Form />
        </div>
      </section>
    </section>
  );
};
