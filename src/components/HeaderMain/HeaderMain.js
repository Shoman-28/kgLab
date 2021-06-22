import React from "react";
import "./HeaderMain.css";
import chair from "../../images/chair-1.png";
import { Button, SplitButton } from "react-bootstrap";

const HeaderMain = () => {

  return (
    <main
      style={{ height: "600px" }}
      className="row d-flex  align-items-center"
    >
      <div className="col-md-4 offset-md-1 text-left">
        <h1 style={{ color: "#3A4256" }}>
          Your New Smile <br /> Starts Here
        </h1>
        <p className="text-secondary">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly or a used to demonstrate the visual form of a document.{" "}
        </p>
        <Button className="button-background">GET APPOINTMENT</Button>
      </div>
      <div className="col-md-6 col-sm-6 col-12">
        <img src={chair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
