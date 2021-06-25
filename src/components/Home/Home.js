import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import Services from '../Services/Services';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonials from '../Testimonials/Testimonials';
import Blogs from '../Blogs/Blogs';
import Doctors from '../Doctor/Doctor';
import Contact from '../Contact/Contact';
import FeaturedService from '../FeaturedService/FeaturedService';


const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <FeaturedService/>
            <MakeAppointment/>
            <Testimonials/>
            <Blogs></Blogs>
            <Doctors/>
            <Contact/>       
        </div>
    );
};

export default Home;