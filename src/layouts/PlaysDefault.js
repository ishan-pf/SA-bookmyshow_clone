import React from 'react';
import PlaysPage from '../Pages/PlaysPage';
import Navbar from "../components/Navbar/Navbar.component"
// import HeroSlider from "../components/HeroCarousal/HeroCarousal"


const DefaultLayout = (props) => {

    return (
        <>
            <Navbar />
            <PlaysPage />
        </> 
        
    );
};

export default DefaultLayout;