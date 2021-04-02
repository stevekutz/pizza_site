import React, {useState} from 'react';
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

    const [isOpen, setIsOpen] = useState(false);

    const toggleSideMenu = () => {
        setIsOpen(!isOpen);
    
    }

    return (
        <HeroContainer>
            <Navbar 
                toggleSideMenu = {toggleSideMenu}
            />
            <Sidebar 
                isOpen = {isOpen}
                toggleSideMenu = {toggleSideMenu}
            />
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