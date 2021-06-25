import React from "react";
import TechnicalServiceCard from "../TechnicalService/TechnicalServiceCard/TechnicalServiceCard";
import "./TacnicalServiceDteails.css";
import {
  faHome,
  faUser,
  faSmileBeam,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import TechnicalServiceDetailscard from "./TechnicalServiceDetailscard/TechnicalServiceDetailscard";
const tSCard = [
  {
    title: "Hospital Roomes",
    icon: faHome,
    quantity: "340",
  },
  {
    title: "Specialist Doctors",
    icon: faUser,
    quantity: "100",
  },
  {
    title: "Happy Patients",
    icon: faSmileBeam,
    quantity: "1500",
  },
  {
    title: "Years of Experience",
    icon: faCalendarAlt,
    quantity: "16",
  },
];
const TacnicalServiceDteails = () => {
  return (
    <section className="technical-service-details mt-5 pt-5">
     
       
          <div className="TacnicalServiceDteails">
          <div className="row ">
              {tSCard.map((tSCard) => (
                <TechnicalServiceDetailscard tSCard={tSCard}></TechnicalServiceDetailscard>
              ))}
              
            
          </div>
          </div>
           
       
      
    </section>
  );
};

export default TacnicalServiceDteails;
