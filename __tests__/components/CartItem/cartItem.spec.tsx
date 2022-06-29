import { fireEvent, render, screen } from '@testing-library/react';

import CartItem from '../../../src/components/CartItem/index';

const product = {
  title: 'Relógio bonito',
  value: '22.00',
  quantity: 1,
};

describe('<ProductCard />', () => {
  beforeEach(() => {
    render(<CartItem product={product} />);
  });

  it('should render product card component', async () => {
    const $cartItem = await screen.findByTestId('cart-item');
    expect($cartItem).toBeInTheDocument();
  });

  it('should display proper content', async () => {
    const $title = screen.getByText(new RegExp(product.title, 'i'));
    const $value = screen.getByText(new RegExp(product.value, 'i'));

    expect($title).toBeInTheDocument();
    expect($value).toBeInTheDocument();
  });
});

