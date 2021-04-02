import React from 'react';
import {Nav, NavIcon, NavLink, Bars} from './NavbarElements';

const Navbar = ({toggleSideMenu}) => {
    return (
        
            <Nav>  
            
                <NavLink to = '/'> Pizza </NavLink> 
                <NavIcon onClick = {toggleSideMenu}>
                    <p> Menu </p>
                    <Bars />
                </NavIcon>
            </Nav>
        
        
    
    )


}

export default Navbar;
