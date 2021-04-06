import React, {useState} from 'react';
import onClickOutside from 'react-onclickoutside';
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


function Hero(){
// const Hero = () => {

    const [isOpen, setIsOpen] = useState(false);

    // ADD THIS !!!


    const toggleSideMenu = () => {
        setIsOpen(!isOpen);
    }

    Hero.handleClickOutside = () => {
        // setIsOpen(true);
        toggleSideMenu();
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

const clickOutsideConfig = {
    handleClickOutside: () => Hero.handleClickOutside,

};


// export default Hero;
export default onClickOutside(Hero, clickOutsideConfig);