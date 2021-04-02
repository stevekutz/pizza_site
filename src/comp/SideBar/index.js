import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
    SideBtnWrap,

} from './SidebarElements';


const Sidebar = ({ isOpen, toggleSideMenu }) => {
 
    return (
        <SidebarContainer isOpen = {isOpen} onClick = {toggleSideMenu}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to = '/'> Pizzas </SidebarLink>
                <SidebarLink to = '/'> Desserts </SidebarLink>
                <SidebarLink to = '/'> Full Menu </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to = '/'> Order Now </SidebarRoute>
            </SideBtnWrap>

        </SidebarContainer>
    )
 
 
 }

 export default Sidebar;