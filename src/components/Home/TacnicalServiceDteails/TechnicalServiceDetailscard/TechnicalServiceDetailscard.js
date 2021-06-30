import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './TechnicalServiceDetailscard.css';
const TechnicalServiceDetailscard = ({ tSCard }) => {
  console.log(tSCard.title);
  return (
    <div className="col-md-3 col-sm-6 col-12 pb-3">
      <div className="d-flex align-items-center technical-servicedetails-card">
        <div className="mr-3">
          <FontAwesomeIcon className="info-icon" icon={tSCard?.icon} />
        </div>
        <div className="text-wight" style={{color:"#fff"}}>
          <h6 style={{color:"#fff", fontWeight:'600', fontSize:'30px'}}>{tSCard.quantity}</h6>
          <p style={{ fontSize:'15px'}}>{tSCard.title}</p>
        </div>
      </div>
    </div>
  );
};

export default TechnicalServiceDetailscard;
