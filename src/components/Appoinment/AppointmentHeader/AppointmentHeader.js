import React from "react";
import chair from "../../../images/chair-1.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
  
  return (
    <main
      style={{ height: "600px" }}
      className="row d-flex  align-items-center"
    >
      <div className="col-md-4 offset-md-1 text-left">
        <h1 style={{ color: "#3A4256" }}>Appointment</h1>
        <Calendar
        onChange={handleDateChange}
        value={new Date()}
      />
      </div>
      <div className="col-md-6 col-sm-6 col-12">
        <img src={chair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default AppointmentHeader;
