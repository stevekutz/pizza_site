import styled from 'styled-components';
import ImgBg from '../../images/pizza-3.jpg';

export const HeroContainer = styled.div`
    // background: deeppink;
    background: linear-gradient(to right, rgba(0,0,0,0.7),
        rgba(0,0,0,0.1)), url(${ImgBg}); 
    height: 100vh;  // allows transparent background  to show img
    background-position: center;
    background-size: cover;
`;

export const HeroContent = styled.div`
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0 calc((100vw = 1300px) / 2);

`;

export const HeroItems =  styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width;: 650px;
    color: #fff;
    text-transfrom: uppercase;
    line-height: 1;
    font-weight: bold;

    @media screen and (max-width: 650px) {
        width: 100%;
    }

`;

export const HeroH1 = styled.h1`
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin:-bottom: 1rem;
    box-shadow: 3px 5px #e9ba23;
    letter-spacing: 3px;

`;

export const HeroBtn = styled.button`
    font-size: 1.4rem;
    padding: 1rem 4rem;
    border: none;
    background: #e31837;
    color: #fff;
    transition: 0.2s ease-out;

    &:hover{
        background: #ffc500;
        transition: 0.2 ease-out;
        cursor: pointer;
        color: #000;
    }

`;

export const ProductsContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 5rem calc((100vh - 1300px)/2);
    background: #150f0f;

`;


