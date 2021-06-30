import React from "react";
import "./TechnicalService.css";
import right from "../../../images/rite.png";

import { faHospitalSymbol,  faAmbulance,  faCapsules} from "@fortawesome/free-solid-svg-icons";
import TechnicalServiceCard from "./TechnicalServiceCard/TechnicalServiceCard";

const technicalService = [
  {
    serviceName: "Emergency Help",
    icon: faAmbulance,
  },
  {
    serviceName: "Enriched Pharmecy",
    icon: faCapsules,
  },
  {
    serviceName: "Medical Treatment",
    icon: faHospitalSymbol,
  },
];

const TechnicalService = () => {

 
  return (
    <section className="TechnicalService-container mt-5 pt-5">
      <div className="text-center technicalService">
        <h2>
          We Are Always Reday To Help Yoy & <br /> Your Family
        </h2>
        <img src={right} style={{ height: "auto", mexWidth: "100%" }} alt="" />

        <p>
          lorem ipsum dolor sit amet consectetur adipsicing elit praesent
          aliquet. pretiumts
        </p>
      </div>
     
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
          {technicalService.map((technicalservice) => 
            <TechnicalServiceCard tservice={technicalservice} ></TechnicalServiceCard>
          )}
        </div>
      </div>
    </section>
  );
};

export default TechnicalService;
