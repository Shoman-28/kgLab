import React from "react";
import InfoCard from "../../InfoCard/InfoCard";
import { faClock, faMap, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Businessinfo.css";

const infosData = [
  {
    title: "Opening Hours",
    description: "We are opne 7 days",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visite Our Location",
    description: "Broklyn, NY 1003 USA",
    icon: faMap,
    background: "dark",
  },
  {
    title: "Call us now",
    description: "+156920598275",
    icon: faPhone,
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
