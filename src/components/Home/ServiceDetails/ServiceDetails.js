import React from 'react';
import './ServiceDetails.css';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height:'50px'}} src={service.img} alt=""/>
                <h5 className="mt-3 mb-3">{service.name}</h5>
                
            <p className="text-secondary">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface</p>
        </div>
    );
};

export default ServiceDetails;