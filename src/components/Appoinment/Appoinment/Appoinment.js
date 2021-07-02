import React, { useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import BookAppointment from "../BookAppointment/BookAppointment";
import Navbar from "../../Shared/Navbar/Navbar";
const Appoinment = () => {
 const [selectDate, setSelectDate]= useState();
 console.log(selectDate)
  const handleDateChange = (data) => {
    setSelectDate(data)
    
  };

  return (
    <div>
      <Navbar/>
      <AppointmentHeader handleDateChange={handleDateChange} />
      <BookAppointment date={selectDate}/>
      <Footer/>
    </div>
  );
};

export default Appoinment;
