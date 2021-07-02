import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';
import Blogs from '../Blogs/Blogs';

const Blog = () => {
    return (
        <div className="container">
            <Navbar></Navbar>
            <Blogs></Blogs>
            <Footer/>
            
        </div>
    );
};

export default Blog;