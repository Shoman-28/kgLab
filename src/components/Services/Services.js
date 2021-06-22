import React from 'react';
import './Services.css';
import Fluoride from '../../images/Fluoride.png'
import Cavity from '../../images/Cavity.png'
import Teeth from '../../images/Teeth.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
const serviceData =[
    {
        name: 'Fluoride Treatment',
        img:Fluoride,
    },
    {
        name: 'Cavity Filling',
        img: Cavity,
    },
    {
        name: 'Teeth Whitening',
        img:Teeth,

    }
]
const Services = () => {
    return (
        <section className="services-container mt-5 pt-5">
            <div className="text-center">
                <h5 style={{color:'#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Privide</h2>
            
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">  
                    {
                        serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;