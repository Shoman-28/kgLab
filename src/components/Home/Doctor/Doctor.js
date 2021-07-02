import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = ({doctor}) => {
    console.log(doctor)
    return (
        <div className="col-md-4 text-center">
            {/* <img className="img-fluid mb-3" src={dinfo.img} alt=""/>
            <img style={{height:'200px'}} className="img-fluid mb-3" src={``} alt="http://localhost:3000/${doctor.img}"/>
            http://localhost:3000/doctors
            <h4>Dr. Coudi</h4> */}
            {/* <p> <FontAwesomeIcon className="text-primary" icon={info.faPhoneAlt}/> {info.number}</p> */}
        </div>
        
    );
};

export default Doctor;