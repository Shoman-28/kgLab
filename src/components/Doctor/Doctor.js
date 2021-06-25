import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = ({dinfo}) => {
    console.log(dinfo)
    return (
        <div className="col-md-4 text-center">
            {/* <img className="img-fluid mb-3" src={dinfo.img} alt=""/>
            <h4>Dr. Coudi</h4> */}
            {/* <p> <FontAwesomeIcon className="text-primary" icon={info.faPhoneAlt}/> {info.number}</p> */}
        </div>
        
    );
};

export default Doctor;