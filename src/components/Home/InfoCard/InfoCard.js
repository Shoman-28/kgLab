import React from 'react';
import './InfoCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const InfoCard = ({info}) => {
    console.log(info.icon)
    
    return (
        <div className="col-md-4 text-white info-card mb-4">
           <div className={`d-flex justify-content-center info-container info-${info.background}`}>
           <div className="mr-3">
                <FontAwesomeIcon className="info-icon" icon={info.icon} />
            </div>
            <div>
                <h6>{info.title}</h6>
                <small>{info.description}</small>     
                <h6 className="pt-3"> <a href="/">LEARN MORE</a> </h6>           
            </div>
           </div>
        </div>
    );
};

export default InfoCard;