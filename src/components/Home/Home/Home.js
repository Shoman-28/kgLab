import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import Services from '../Services/Services';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonials from '../Testimonials/Testimonials';
import Blogs from '../Blogs/Blogs/Blogs';
import Doctors from '../Doctors/Doctors';
import Contact from '../Contact/Contact/Contact';
import FeaturedService from '../FeaturedService/FeaturedService';
import TechnicalService from '../TechnicalService/TechnicalService';
import TacnicalServiceDteails from '../TacnicalServiceDteails/TacnicalServiceDteails';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <TechnicalService/>
            <TacnicalServiceDteails/>
            <Services/>
            <FeaturedService/>
            <MakeAppointment/>
            <Testimonials/>
            <Blogs></Blogs>
            <Doctors/>
            <Contact/>  
            <Footer/>     
        </div>
    );
};

export default Home;