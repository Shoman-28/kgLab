import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppointmentsByData from '../AppointmentsByData/AppointmentsByData';

import { userContext } from '../../../App';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}

const Deshboard = () => {

    const {loggedInUser, setLoggedInUser} = useContext(userContext);
    const [selectedDate , setSelectedDate] = useState(new Date());
     const [appointments, setAppointments] = useState([]);
     
console.log(appointments)
    
    
    console.log(appointments)
    const handleDateChange = value => {
        setSelectedDate(value);
    }

    


    useEffect(() => {
        fetch('https://peaceful-redwood-04783.herokuapp.com/appointmentsByDate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ date:selectedDate, email: loggedInUser.email })
            
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [selectedDate])

    return (
        
            
            <section>
            <div style={containerStyle} className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
                    <Calendar
                        
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                
                <div className="col-md-5 col-sm-12 col-12">
                    <AppointmentsByData appointments={appointments} ></AppointmentsByData>
                </div>
            </div>
        </section>
    );
};

export default Deshboard;