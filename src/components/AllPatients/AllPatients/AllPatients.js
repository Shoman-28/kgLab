import React, { useEffect, useState } from 'react';
import AppointmentDataTable from '../../Deshboard/AppointmentDataTable/AppointmentDataTable';
import Sidebar from '../../Deshboard/Sidebar/Sidebar';

const AllPatients = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5500/allAppointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    return (
        <div className="container-fluid row" >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Patients</h5>
                <AppointmentDataTable appointments={appointments} />
            </div>
        </div>
    );
};

export default AllPatients;