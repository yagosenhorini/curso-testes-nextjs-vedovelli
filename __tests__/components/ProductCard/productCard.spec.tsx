import { fireEvent, render, screen } from '@testing-library/react';

import ProductCard from '../../../src/components/ProductCard/index';

const product = {
  title: 'Relógio bonito',
  value: '22.00',
};

const addToCart = jest.fn();

describe('<ProductCard />', () => {
  beforeEach(() => {
    render(<ProductCard product={product} addToCart={addToCart} />);
  });

  it('should render product card component', async () => {
    const $productCard = await screen.findByTestId('product-card');
    expect($productCard).toBeInTheDocument();
  });

  it('should display proper content', () => {
    const $text = product.title;
    const $price = product.value;

    expect(screen.getByText($text)).toBeInTheDocument();
    expect(screen.getByText($price)).toBeInTheDocument();
  });

  it('should add to card', async () => {
    const $button = screen.getByRole('button');

    fireEvent.click($button);

    expect(addToCart).toHaveBeenCalledTimes(1);
    expect(addToCart).toBeCalledWith(product);
  });
});

