import React, { MouseEventHandler } from 'react';

import * as S from './styled';

type ProductCardType = {
  product: {
    title: string;
    value: string;
  };
  addToCart: (product: {
    title: string;
    value: string;
  }) => React.MouseEventHandler<HTMLButtonElement>;
};

const ProductCard = ({ product, addToCart }: ProductCardType) => {
  return (
    <S.ProductCardWrapper data-testid="product-card">
      <S.ProductCardInfoSection>
        <S.ProductCardTitle>{product.title}</S.ProductCardTitle>
        <S.ProductCardValue>{product.value}</S.ProductCardValue>
      </S.ProductCardInfoSection>
      <S.ProductAddToCart type="button" onClick={() => addToCart(product)}>
        Add
      </S.ProductAddToCart>
    </S.ProductCardWrapper>
  );
};

export default ProductCard;

