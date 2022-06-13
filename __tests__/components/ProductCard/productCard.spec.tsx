import { render, screen } from '@testing-library/react';

import ProductCard from '../../../src/components/ProductCard/index';

const product = {
  title: 'Relógio bonito',
  value: '22.00',
}

describe('<ProductCard />', () => {
  beforeEach(() => {
    render(<ProductCard product={product}/>);
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
  })
});