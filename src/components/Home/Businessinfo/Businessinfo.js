import React from "react";
import InfoCard from "../../InfoCard/InfoCard";
import { faClock, faHourglassEnd, faHospitalSymbol } from "@fortawesome/free-solid-svg-icons";
import "./Businessinfo.css";

const infosData = [
  {
    title: "Opening Hours",
    description: "Lorem ipsum sit  Vivamus et erat in lacus convallis sodales.",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Emergency Cases",
    description: "Lorem ipsum sit Vivamus et erat in lacus convallis sodales.",
    icon: faHospitalSymbol,
    background: "dark",
  },
  {
    title: "Doctors Timetable",
    description: "Lorem ipsum sit Vivamus et erat in lacus convallis sodales.",
    icon: faHourglassEnd,
    background: "primary",
  },
];

const Businessinfo = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="w-75 row">
        {infosData.map((info) => (
          <InfoCard info={info}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default Businessinfo;
