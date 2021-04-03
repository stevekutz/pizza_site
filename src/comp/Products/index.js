import React from 'react';

import {
    ProductsContainer,
    ProductWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImage,
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
                            <ProductImage src = {product.img} alt = {product.alt}/>
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