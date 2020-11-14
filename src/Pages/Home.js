import React from 'react';
import Navbar from '../Components/transparent-nav/Navbar'
import Header from '../Components/Header/Header'
import Info from '../Components/Info/Info';

const Home = () => {
    return (
        <div>
        <Navbar className="navbarC"/>
          <Header className="header"/>
          <Info/>
        </div>
    );
};

export default Home;