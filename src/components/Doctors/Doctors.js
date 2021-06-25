import React from 'react';
import Doctor from '../Doctor/Doctor';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import img from '../../images/doctor-sm.png';

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
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    {/* <Doctor/>
                    <Doctor/>
                    <Doctor/> */}
                    {
                        doctorInformation.map(dinfo => <Doctor dinfo={dinfo} key={dinfo.dname}></Doctor>)
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Doctors;