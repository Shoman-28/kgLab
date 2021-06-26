import React from "react";
import './BookAppointment.css';

const BookAppointment = ({date}) => {
  
  return (
    <section>
      <h1 className="text-brand text-center">Available Appointment on {date?.toDateString()} </h1>
    </section>
  );
};

export default BookAppointment;
