import {  IconSchool, IconBriefcase } from "@tabler/icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
    <VerticalTimeline>
      {(showEducation ? educationHistory : workHistory).map((item) => (
        <VerticalTimelineElement
          key={item.id}
          date={item.date}
          iconStyle={{
            background: "var(--bg-buttons)",
            color: "#fff",
            border: "none"
           }}
          icon={showEducation ? <IconSchool /> : <IconBriefcase />}
          contentStyle={{
            background: "transparent",
            color: "var(--foreground)",
            border: "1px solid var(--socials-buttons)",
            boxShadow: "unset"
          }}
          contentArrowStyle={{
            borderRight: "7px solid  var(--socials-buttons)",
          }}
           
        >
          <h3 className="vertical-timeline-element-title">{item.title}</h3>
          <p>{item.text}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};
