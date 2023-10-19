import { IconClick, IconSchool, IconBriefcase } from "@tabler/icons";
import { useState } from "react";
import { TimeLine } from "./TimeLine";

export const AboutMe = () => {
  const [showEducation, setShowEducation] = useState(false);
  const [activeEducation, setActiveEducation] = useState(false);
  const [activeWork, setActiveWork] = useState(true);
  return (
    <section className="u-center w-full" id="sobreMi">
      <div className="w-full flex flex-col justify-center items-center border-t-2 border-[var(--bg-hover)]">
        <h1 className="text-4xl font-bold pt-4">Sobre mí</h1>
        <span className="text-base text-[var(--text-secondary)]">
          Quién soy
        </span>
      </div>
      <div>
        <p className="mt-5 text-xl text-start">
          <span className="font-bold">Software Developer,</span> apasionado por
          el desarrollo Frontend ♥️. Me encanta crear sitios web que brinden una
          experiencia de usuario única y satisfactoria. Puedes ver algunos de
          mis proyectos en la sección de{" "}
          <a className="font-bold inline-flex" href="#misProyectos">
            proyectos.
            <IconClick />
          </a>
          <br />
          Soy una persona autodidacta, responsable y comprometida con mi
          trabajo. Constantemente estoy aprendiendo nuevas tecnologías y
          herramientas para mejorar mis habilidades.
          <br />
          Si tiene alguna pregunta o algun comentario no dude en{" "}
          <a className="font-bold inline-flex" href="#contactame">
            contactarme.
            <IconClick />
          </a>
        </p>
        <div className="mt-10">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold">Mi trayectoria.</h1>
            <span className="text-base text-[var(--text-secondary)]">
              Educación y trabajo
            </span>
          </div>
          <div className="flex flex-wrap  items-center justify-center mt-10 mb-10 gap-5">
          <button
              onClick={() => {
                setShowEducation(false);
                setActiveEducation(false);
                setActiveWork(true);
              }}
              className={`flex gap-2 font-bold text-lg md:text-2xl items-center hover:text-[var(--bg-buttons)] w-fit justify-center ${
                activeWork ? "border-b-2 border-[var(--bg-buttons)]" : ""
              }`}
            >
              <IconBriefcase className="h-10 w-10" />
              Trabajo
              <IconClick />
            </button>
            <button
              onClick={() => {
                setShowEducation(true);
                setActiveEducation(true);
                setActiveWork(false);
              }}
              className={`flex gap-2 font-bold text-lg md:text-2xl items-center hover:text-[var(--bg-buttons)] w-fit justify-center ${
                activeEducation ? "border-b-2 border-[var(--bg-buttons)]" : ""
              }`}
            >
              <IconSchool className="h-10 w-10" />
              Educación <IconClick />
            </button>
       
          </div>
          <TimeLine showEducation={showEducation} />
        </div>
      </div>
    </section>
  );
};
