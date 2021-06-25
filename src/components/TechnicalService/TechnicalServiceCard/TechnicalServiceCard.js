import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./TechnicalServiceCard.css";

const TechnicalServiceCard = ({tservice}) => {

  return (
    <div className="col-md-4 text-center mb-4">
      <small>
        <FontAwesomeIcon className="tService-icon" icon={tservice?.icon} />
      </small>
      <h3 style={{ paddingTop: "20px", color: "#2C2D3F", fontWeight: "600", fontSize: "21px"}}> {tservice?.serviceName}  </h3>
      <p style={{ color: "#757575", lineHeight: "24px", fontWeight: "400" }}>
        Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
        vulputate.
      </p>
    </div>
  );
};

export default TechnicalServiceCard;
