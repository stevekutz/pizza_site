import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaPizzaSlice} from 'react-icons/fa';

export const Nav = styled.nav`
    background: transparent;
    // background: pink;
    border: 1px solid black;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
    z-index: 0;
`

export const NavLink = styled(Link)`
    color: #fff;
    border: 1px solid black;
    // color: #888;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    // z-index: 0;

    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }

`;

export const NavIcon = styled.div`
    border: 1px solid black;
    display: block;
    position: absolute;
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
    border: 1px solid black;
    font-size: 2rem;
    transform: translate(-50%, -15%);
`;