import React from 'react';
import {FeatureContainer, FeatureButton} from './FeatureElements';

const Feature = () => {
    
    return(
        <FeatureContainer>
            <h1> Pizza of the Day</h1>
            <p> Exotic flax-seed crust xcoverd with gold powder </p>
            <FeatureButton> Order Now </FeatureButton>
        </FeatureContainer>
    )
}

export default Feature;