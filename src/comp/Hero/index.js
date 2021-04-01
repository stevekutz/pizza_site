import React from 'react';
import Navbar from '../Navbar';
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
            <HeroContent>
                <HeroItems>
                    <HeroH1> Great Pizza Served Here! </HeroH1>
                    <HeroBtn> Place Order! </HeroBtn>
                
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );


};

export default Hero;