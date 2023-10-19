import { IconBrandGithub, IconWorld } from "@tabler/icons";
import Image from "next/image";

const projectsInfo = [
  {
    id: 1,
    proyecto_title: "Marvel Comics App",
    proyecto_description:
      "Permite ver y comprar los comics de Marvel, tambien permite ver los detalles de cada comic y los personajes que aparecen en cada uno de ellos, además de ver el detalle de cada personaje y los comics en los que aparece.",
    proyecto_url_github:
      "https://github.com/gianlucadonofrio/ctd-esp-fe3-final",
    proyecto_url_web: "https://ctd-esp-fe3-final-beta.vercel.app/",
    proyecto_tecnologias: [
      "NextJS",
      "TypeScript",
      "Material UI",
      "React Hook Form",
      "Jest",
    ],
  },
  {
    id: 2,
    proyecto_title: "The Simpsons App",
    proyecto_description:
      "Permite buscar citas de los personajes de la serie, también permite ver los detalles de cada personaje de la familia Simpson y ver algunas noticias relacionadas a la serie.",
    proyecto_url_github:
      "https://github.com/gianlucadonofrio/ctd-esp-fe2-final",
    proyecto_url_web: "https://the-simpson-app.vercel.app/",
    proyecto_tecnologias: [
      "ReactJS",
      "TypeScript",
      "Styled Components",
      "Redux",
      "Jest",
    ],
  },
  {
    id: 3,
    proyecto_title: "Rick and Morty App",
    proyecto_description:
      "Permite buscar personajes de la serie, ver sus detalles y ver episodios relacionados a cada personaje, además de poder agregarlos a favoritos.",
    proyecto_url_github:
      "https://github.com/gianlucadonofrio/ctd-esp-fe1-final",
    proyecto_url_web: "https://rick-and-morty-taupe-two.vercel.app/",
    proyecto_tecnologias: ["ReactJS", "Redux", "TypeScript", "JSDoc"],
  },
  {
    id: 4,
    proyecto_title: "Github Issues",
    proyecto_description:
      "Permite seguir el estado de los issues de un repositorio de Github, además de poder filtrarlos por estado. Se utilizó React Query para manejar el estado de la aplicación. ",
    proyecto_url_github:
      "https://github.com/gianlucadonofrio/react-query/tree/main/02-react-query-issues",
    proyecto_url_web: "https://react-query-beta.vercel.app/",
    proyecto_tecnologias: ["ReactJS", "React Query", "TypeScript"],
  },
];

export const ProjectCard = () => {
  return (
    <section id="projects">
      {projectsInfo.map((project, index) => (
        <div
          key={project.id}
          className="flex flex-col items-center mt-10 justify-center border-2 border-[var(--bg-hover)]
          rounded-lg shadow-lg md:flex-row md:border-none md:shadow-none md:relative md:h-96"
        >
          <Image
            src={`/images/project-${project.id}.webp`}
            alt={project.proyecto_title}
            className={`rounded-t md:w-3/5 w-auto object-cover md:absolute ${
              index % 2 === 0 ? "md:right-0" : "md:left-0"
            }  md:rounded`}
            priority
            width={1000}
            height={1000}
          />
          <div
            className={`flex flex-col items-center mt-2 md:absolute md:left-0 md:w-full ${
              index % 2 === 0
                ? "md:items-start md:text-start"
                : "md:items-end md:text-end"
            } last:border-red-500`}
          >
            <h1
              className={`text-3xl font-bold text-start md:w-2/5 md:text-4xl ${
                index % 2 === 0 ? "md:text-start" : "md:text-end"
              } 
            `}
            >
              {project.proyecto_title}
            </h1>
            <p
              className={`p-4 md:bg-[var(--bg-buttons)] md:rounded-lg md:text-lg md:w-1/2 md:mt-3 font-bold md:text-white md:shadow-xl md:shadow-[var(--nav-shadow)] 
             ${index % 2 === 0 ? "md:text-start" : "md:text-end"} 
            
            `}
            >
              {project.proyecto_description}
            </p>
            <ul
              className={`flex flex-wrap gap-2 mt-3 md:w-2/5 md:mt-3 justify-center p-2
            ${index % 2 === 0 ? "md:justify-start md:pl-0" : "md:justify-end md:pr-0"}
            `}
            >
              {project.proyecto_tecnologias.map((tecnologia) => (
                <li
                  key={tecnologia}
                  className="bg-gray-500 p-1 rounded font-bold text-white text-sm"
                >
                  {tecnologia}
                </li>
              ))}
            </ul>
            <div
              className={`flex justify-center gap-5 pt-4  md:w-2/5  mb-5 md:mb-0
            ${
              index % 2 === 0
                ? "md:justify-start md:pr-5"
                : "md:justify-end md:pl-5"
            }
            `}
            >
              <a
                href={project.proyecto_url_github}
                target="_blank"
                rel="noreferrer"
                aria-label="github"
              >
                <IconBrandGithub className="h-10 w-10 hover:scale-125 hover:text-[var(--bg-buttons)]" />
              </a>
              <a
                href={project.proyecto_url_web}
                target="_blank"
                rel="noreferrer"
                aria-label="web"
              >
                <IconWorld className="h-10 w-10 hover:scale-125 hover:text-[var(--bg-buttons)]" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
export default ProjectCard;
