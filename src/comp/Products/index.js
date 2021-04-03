import React from 'react';

import {
    ProductsContainer,
    ProductWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImage,
    ImageContainer,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton,

} from './ProductsElements';

const Products = ({heading, data}) => {

    return(
        <ProductsContainer>
            <ProductsHeading> {heading} </ProductsHeading>
            <ProductWrapper>
                {data.map((product, index) => {
                    return (
                        <ProductCard key = {index}>
                            <ImageContainer>
                                <ProductImage src = {product.img} alt = {product.alt}/>
                            
                            </ImageContainer>
                            <ProductInfo>
                                <ProductTitle> {product.name} </ProductTitle>
                                <ProductDesc> {product.desc} </ProductDesc>
                                <ProductPrice> {product.pricce} </ProductPrice>
                                <ProductButton> Add to Order </ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            
            </ProductWrapper>
        </ProductsContainer>
    )

}

export default Products;