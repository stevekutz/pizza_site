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
import onClickOutside from 'react-onclickoutside';

// const Sidebar = ({ isOpen, toggleSideMenu }) => {
// const Sidebar = (props) => { 

function Sidebar(props){
// <SidebarContainer isOpen = {isOpen} onClick = {toggleSideMenu}>

    // Sidebar.handleClickOutside = () => {
    //     props.setIsOpen(!true);
    //     props.toggleSideMenu();
    // }


    return (
        <SidebarContainer 
            isOpen = {props.isOpen} 
            onClick = {props.toggleSideMenu} 
            // onTouchMove   = {props.toggleSideMenu}
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

// const clickOutsideConfig = {
//     handleClickOutside: () => Sidebar.handleClickOutside,
// }


// export default onClickOutside(Sidebar, clickOutsideConfig)
export default Sidebar;