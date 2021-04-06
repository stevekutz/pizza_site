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


// const Sidebar = ({ isOpen, toggleSideMenu }) => {
// const Sidebar = (props) => { 

function Sidebar(props){
// <SidebarContainer isOpen = {isOpen} onClick = {toggleSideMenu}>

    return (
        <SidebarContainer 
            isOpen = {props.isOpen} 
            onClick = {props.toggleSideMenu} 
            
        >
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