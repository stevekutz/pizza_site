import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../SideBar';
import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn,


} from './HeroElements';


const Hero = () => {

    return (
        <HeroContainer>
            <Navbar />
            <Sidebar />
            <HeroContent>
                <HeroItems>
                    <HeroH1> Great Pizza Served Here! </HeroH1>
                    <HeroP> Free Delivery </HeroP>
                    <HeroBtn> Place Order! </HeroBtn>
                
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );


};

export default Hero;