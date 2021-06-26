import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Businessinfo from '../Businessinfo/Businessinfo';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = () => {

    return (
        <div className="header-container">
            <NavBar/>
            <HeaderMain/>
            <Businessinfo/>
        </div>
    );
};

export default Header;