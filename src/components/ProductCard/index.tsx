import React from 'react';

import * as S from './styled';

type ProductCardType = {
  product: {
    title: string,
    value: string,
  }
};

const ProductCard = ({ product }: ProductCardType) => {
  return (
    <S.ProductCardWrapper data-testid="product-card">
      <S.ProductCardInfoSection>
        <S.ProductCardTitle>{product.title}</S.ProductCardTitle>
        <S.ProductCardValue>{product.value}</S.ProductCardValue>
      </S.ProductCardInfoSection>
    </S.ProductCardWrapper>
  );
};

export default ProductCard;

