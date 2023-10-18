import { IconFolder, IconBrandGithub, IconWorld } from "@tabler/icons";
const othersProjects = [
  {
    id: 1,
    proyecto_title: "The Food Truck",
    proyecto_description:
      "Sitio web para una empresa de comida rápida, con un diseño moderno y minimalista, con un menú interactivo y un carrito de compras.",
    proyecto_url_github: "https://github.com/gianlucadonofrio/theFoodTruck",
    proyecto_url_web: "https://the-food-truck-vue-js.vercel.app/",
    proyecto_tecnologias: [
      {
        id: 1,
        tecnologia: "VueJS",
      },
      {
        id: 2,
        tecnologia: "Vuetify",
      },
      {
        id: 3,
        tecnologia: "Vue router",
      },
      {
        id: 4,
        tecnologia: "Vuex",
      },
    ],
  },
  {
    id: 2,
    proyecto_title: "Digital Booking",
    proyecto_description:
      "Sitio web para reservas de alojamientos, donde los usuarios pueden buscar alojamientos, reservarlos y dejar comentarios.",
    proyecto_url_github: "https://github.com/gianlucadonofrio/digital-booking",
    proyecto_tecnologias: [
      {
        id: 1,
        tecnologia: "HTML & CSS",
      },
      {
        id: 2,
        tecnologia: "JavaScript",
      },
      {
        id: 3,
        tecnologia: "ReactJS",
      },
    ],
  },
  {
    id: 3,
    proyecto_title: "Todo List",
    proyecto_description:
      "Aplicación web para crear listas de tareas, donde los usuarios pueden crear, editar y eliminar tareas.",
    proyecto_url_github:
      "https://github.com/gianlucadonofrio/react-basics/tree/main/app-to-do",
    proyecto_url_web: "https://jade-croquembouche-c4a60f.netlify.app/",
    proyecto_tecnologias: [
      {
        id: 1,
        tecnologia: "HTML & CSS",
      },
      {
        id: 2,
        tecnologia: "JavaScript",
      },
      {
        id: 3,
        tecnologia: "ReactJS",
      },
    ],
  },
  {
    id: 4,
    proyecto_title: "Calculator App",
    proyecto_description:
      "Aplicación web para realizar operaciones matemáticas, con un diseño minimalista y moderno parecido a la calculadora de iOS.",
    proyecto_url_github:
      "https://github.com/gianlucadonofrio/react-basics/tree/main/calculadora",
    proyecto_url_web: "https://graceful-taffy-84e9b7.netlify.app/",
    proyecto_tecnologias: [
      {
        id: 1,
        tecnologia: "HTML & CSS",
      },
      {
        id: 2,
        tecnologia: "JavaScript",
      },
      {
        id: 3,
        tecnologia: "ReactJS",
      },
    ],
  },
  {
    id: 5,
    proyecto_title: "Counter App",
    proyecto_description:
      "Cuenta con un contador que aumenta la cantidad de clicks que se realizan en el botón, y un botón para reiniciar el contador.",
    proyecto_url_github:
      "https://github.com/gianlucadonofrio/react-basics/tree/main/contador-de-clicks",
    proyecto_url_web: "https://gleaming-sawine-355a2c.netlify.app/",
    proyecto_tecnologias: [
      {
        id: 1,
        tecnologia: "HTML & CSS",
      },
      {
        id: 2,
        tecnologia: "JavaScript",
      },
      {
        id: 3,
        tecnologia: "ReactJS",
      },
    ],
  },
  {
    id: 6,
    proyecto_title: "Choose Your Own Adventure",
    proyecto_description:
      "Aplicación web para crear historias interactivas, donde los usuarios pueden elegir entre diferentes opciones para avanzar en la historia.",
    proyecto_url_github:
      "https://github.com/gianlucadonofrio/react-basics/tree/main/frontend3-primera-evaluacion",
    proyecto_url_web: "https://neon-melomakarona-53c09b.netlify.app/",
    proyecto_tecnologias: [
      {
        id: 1,
        tecnologia: "HTML & CSS",
      },
      {
        id: 2,
        tecnologia: "JavaScript",
      },
      {
        id: 3,
        tecnologia: "ReactJS",
      },
    ],
  },
];

export const OthersProjects = () => {
  return (
    <section>
      <div className="w-full flex flex-col justify-center items-center mt-8 ">
        <h1 className="text-4xl font-bold">Otros proyectos interesantes</h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 bg">
        {othersProjects.map((project) => (
          <div
            key={project.id}
            className="border mt-5 rounded-lg border-[var(--hover-nav)] shadow-2xl shadow-[var(--nav-shadow)] p-5 hover:backdrop-filter backdrop-blur-lg hover:bg-[var(--bg-hover)] hover:bg-opacity-10 transition-all ease-in-out hover:border-[var(--bg-hover)] cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <IconFolder className="w-14 h-14 text-[var(--bg-buttons)]" />
              <div className="flex gap-3">
                <a
                  href={project.proyecto_url_github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                >
                  <IconBrandGithub className="h-10 w-10 text-[var(--text-secondary)] hover:scale-125 hover:text-[var(--bg-buttons)] cursor-pointer" />
                </a>
                {project.proyecto_url_web && (
                  <a
                    href={project.proyecto_url_web}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="web"
                  >
                    <IconWorld className="h-10 w-10 text-[var(--text-secondary)] hover:scale-125 hover:text-[var(--bg-buttons)] cursor-pointer" />
                  </a>
                ) }
              </div>
            </div>
            <h1 className="text-3xl font-bold mt-4 text-center">
              {project.proyecto_title}
            </h1>
            <p className="text-lg mt-3">{project.proyecto_description}</p>
            <div className="flex flex-row justify-center items-center mt-4 gap-4 font-bold flex-wrap">
              {project.proyecto_tecnologias.map((tecnologia) => (
                <div
                  key={tecnologia.id}
                  className="bg-[var(--bg-buttons)] text-white rounded-lg px-3 py-1"
                >
                  {tecnologia.tecnologia}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
