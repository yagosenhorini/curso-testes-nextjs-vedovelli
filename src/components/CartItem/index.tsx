import React from 'react';

import * as S from './styled';

type CartProduct = {
  product: {
    title: string;
    value: string;
    quantity: number;
  };
};

const CartItem = ({ product }: CartProduct) => {
  return (
    <S.ProductCardWrapper data-testid="cart-item">
      <S.ProductCardInfoSection>
        <S.ProductCardTitle>{product.title}</S.ProductCardTitle>
        <S.ProductCardValue>{product.value}</S.ProductCardValue>
      </S.ProductCardInfoSection>
    </S.ProductCardWrapper>
  );
};

export default CartItem;

