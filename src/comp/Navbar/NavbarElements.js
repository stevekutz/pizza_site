import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaPizzaSlice} from 'react-icons/fa';

export const Nav = styled.nav`
    background: transparent;
    // background: deeppink;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
    z-index: 1;
`

export const NavLink = styled(Link)`
    // color: #fff;
    color: #888;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    z-index: 5;

    @media screen and (max-width: 400px) {
        position: absolite;
        top: 10px;
        left: 25px;
    }

`;

export const NavIcon = styled.div`
    display: block;
    postition: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;


    p {
        transform: translate(-175%, 100%);
        font-weight: bold;
    }

`;

export const Bars = styled(FaPizzaSlice)`
    font-size: 2rem;
    transform: translate(-50%, -15%);
`