import { OthersProjects } from "./OthersProjects";
import { ProjectCard } from "./ProjectCard";

export const ProjectsLayout = () => {
  return (
    <section id="misProyectos" className="u-center">
      <div className="w-full flex flex-col justify-center pt-4 items-center border-t-2 border-[var(--bg-hover)]">
        <h1 className="text-4xl font-bold">Mis proyectos</h1>
        <span className="text-base text-[var(--text-secondary)]">
          Algunos de mis proyectos
        </span>
      </div>
      <ProjectCard />
      <OthersProjects />
    </section>
  );
};
