import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Doctor = ({dinfo}) => {
    console.log(dinfo)
    return (
        <div className="col-md-4 text-center">
            <img style={{height:'200px'}}  className="img-fluid mb-3" src={dinfo.img} alt=""/>
            
            <h4>{dinfo.name}</h4>
             <p> <FontAwesomeIcon className="text-primary" icon={dinfo.faPhoneAlt}/> {dinfo.number}</p>
        </div>
        
    );
};

export default Doctor;