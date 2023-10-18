import { IconCalendar } from "@tabler/icons";

const educationHistory = [
  {
    id: 1,
    title: "Universidad Argentina de la Empresa",
    text: "Licenciatura en Gestión de Tecnología de la Información",
    date: "Marzo 2023 - Actualidad",
  },
  {
    id: 2,
    title: "Digital House",
    text: "Certified Tech Developer",
    date: "Julio 2021 - Julio 2023",
  },
  {
    id: 3,
    title: "Universidad Tecnológica Nacional",
    text: "Ingeniería en Sistemas de Información",
    date: "Febrero 2019 - Julio 2021",
  },
];
const workHistory = [
  {
    id: 1,
    title: "Mercado Libre",
    text: "Software Developer",
    date: "Enero 2023 - Actualidad",
    description: "",
  },
];

export const TimeLine = ({ showEducation }) => {
  return (
    <section className="flex flex-col w-full max-w-xl mx-auto">
      <ol className="items-center sm:flex flex-col md:flex-col mt-10  w-full">
        {(showEducation ? educationHistory : workHistory).map((item) => (
          <li
            className="relative mb-6 sm:mb-0 w-full flex flex-col justify-center items-center"
            key={item.id}
          >
            <div className="mt-3 sm:pr-8 w-full rounded-lg  p-5 hover:backdrop-filter backdrop-blur-lg hover:bg-[var(--bg-hover)] hover:bg-opacity-10 transition-all ease-in-out hover:border-[var(--bg-hover)] border-[var(--bg-hover)] border-2 cursor-pointer">
              <time className="flex mb-2 text-xs font-normal leading-none text-[var(--text-secondary)] items-center gap-2">
                <IconCalendar /> {item.date}
              </time>
              <h1 className="text-xl font-bold leading-none"> {item.title}</h1>
              <p className="text-sm mt-1">{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
