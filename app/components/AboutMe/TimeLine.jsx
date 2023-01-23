import { IconCalendar } from "@tabler/icons";

const educationHistory = [
  {
    id: 1,
    title: "Universidad Tecnológica Nacional",
    text: "Ingeniería en Sistemas de Información",
    date: "Febrero 2019 - Julio 2021",
  },
  {
    id: 2,
    title: "Digital House",
    text: "Certified Tech Developer",
    date: "Julio 2021 - Actualidad",
  },
  {
    id: 3,
    title: "Universidad Argentina de la Empresa",
    text: "Licenciatura en Gestión de Tecnología de la Información",
    date: "Marzo 2023 - Actualidad",
  },
];
const workHistory = [
  {
    id: 1,
    title: "Mercado Libre",
    text: "Software Developer",
    date: "Enero 2023 - Actualidad",
  },
];
export const TimeLine = ({ showEducation }) => {
  return (
    <section className="flex flex-col w-full">
      <ol className="items-center sm:flex flex-col md:flex-row mt-10 ">
        {(showEducation ? educationHistory : workHistory).map((item) => (
          <li
            className="relative mb-6 sm:mb-0 w-full md:h-40 flex flex-col even:items-end even:text-end md:even:items-start md:even:text-start"
            key={item.id}
          >
            <div className="flex items-center md:w-full">
              <div className="z-10 flex items-center justify-center w-8 h-9 bg-gray-200 rounded-full ring-0 sm:ring-8 ring-[var(--background)] shrink-0">
                <IconCalendar className="text-black" />
              </div>
              <div className="hidden w-full h-0.5 bg-[var(--bg-buttons)] md:flex" />
            </div>
            <div className="mt-3 sm:pr-8">
              <h1 className="text-base font-bold">{item.title}</h1>
              <time className="block mb-2 text-xs font-normal leading-none text-[var(--text-secondary)]">
                {item.date}
              </time>
              <p className="text-sm font-bold">{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
