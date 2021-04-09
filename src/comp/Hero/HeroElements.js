import styled from 'styled-components';
import ImgBg from '../../images/pizza-3.jpg';

export const HeroContainer = styled.div`
    // background: deeppink;
    // note gradient direction specified as 'to right'
    background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${ImgBg}); 
    // background: linear-gradient(328.78deg, #030086 14.45%, #BD6177 84.36%), linear-gradient(301.28deg, #209B4A 0%, #7000FF 100%), radial-gradient(100% 138.56% at 100% 0%, #D50000 0%, #00FFE0 100%), radial-gradient(100% 148.07% at 0% 0%, #D50000 0%, #00FFFF 100%);
    // background-blend-mode: soft-light, overlay, difference, normal;
    // background: linear-gradient(238.72deg, #9086FF 0%, #000000 100%), linear-gradient(301.28deg, #FF0000 0%, #20002C 100%), linear-gradient(121.28deg, #207A00 0%, #950000 100%), linear-gradient(238.72deg, #00D1FF 0%, #000000 100%), linear-gradient(238.72deg, #00D1FF 0%, #A80000 100%), linear-gradient(58.72deg, #B80000 0%, #1B00C2 100%), linear-gradient(125.95deg, #00E0FF 10.95%, #87009D 100%), linear-gradient(263.7deg, #B60000 3.43%, #B100A0 96.57%), linear-gradient(320.54deg, #800000 0%, #00C2FF 72.37%), linear-gradient(130.22deg, #B9C900 18.02%, #8F73FF 100%);
    // background-blend-mode: color-dodge, difference, color-dodge, difference, lighten, difference, color-dodge, difference, difference, normal;
    
    height: 100vh;
    background-position: center;
    background-size: cover;
    // z-index: 10;
`;

export const HeroContent = styled.div`
    height: calc(100vh - 80px);  // because NavBar is 80px
    // max-height: 100%;
    max-hwight: 50%;
    padding: 0 calc((100vw - 1300px) / 2);  // centers content
    // z-index: 0;
    // cursor: pointer;
`;

export const HeroItems =  styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 650px;
    // width: 70%;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;

    @media screen and (max-width: 650px) {
        width: 100%;
    }

`;

export const HeroH1 = styled.h1`
    // clamp linearly scales 'preferred' between min & max
    // clamp(min, preferred, max)
    font-size: clamp(2.5rem, 10vw, 4rem);
    margin-bottom: 1rem;
    box-shadow: 3px 5px #e9ba23;
    letter-spacing: 3px;  // horz spacing, - reduces spacing, + spreads apart
    padding: 0 4px;
`;

export const HeroP = styled.p`
    font-size: clamp(2rem, 2.5 vw, 3rem);
    margin-bottom: 2rem;
    padding: 0 4px;
`;

export const HeroBtn = styled.button`
    font-size: 1.4rem;
    padding: 1rem 4rem;
    border: none;
    background: #e31837;
    color: #fff;
    transition: 0.5s ease-out;

    &:hover{
        background: #ffc500;
        // transition: 0.2 ease-out;  // no effect
        cursor: pointer;
        color: #000;
    }

`;


// background: linear-gradient(328.78deg, #030086 14.45%, #BD6177 84.36%), linear-gradient(301.28deg, #209B4A 0%, #7000FF 100%), radial-gradient(100% 138.56% at 100% 0%, #D50000 0%, #00FFE0 100%), radial-gradient(100% 148.07% at 0% 0%, #D50000 0%, #00FFFF 100%);
// background-blend-mode: soft-light, overlay, difference, normal;