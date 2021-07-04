import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import img from '../../../images/doctor-sm.png';

const doctorInformation = [
    {
        dname : 'Dr. Coudi',
       picon: faPhoneAlt,
       dnumber:'+88017727234',
       dimg: img,
    },
    {
        dname : 'Dr. Coudi',
       picon: faPhoneAlt,
       dnumber:'+88017727234',
       dimg: img,
    },
    {
        dname : 'Dr. Coudi',
       picon: faPhoneAlt,
       dnumber:'+88017727234',
       dimg: img,
    },
];



const Doctors = () => {

    const [doctors, setDoctors] = useState([])
    console.log(doctors)

    useEffect(() => {
        fetch('https://peaceful-redwood-04783.herokuapp.com/allDoctor')
            .then(res => res.json())
            .then(data =>setDoctors(data))
    }, [])

    
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    {
                        doctors.map(dinfo => <Doctor dinfo={dinfo} key={dinfo.dname}></Doctor>)
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Doctors;