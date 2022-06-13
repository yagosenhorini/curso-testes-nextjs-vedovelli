import { render, screen, fireEvent } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import SearchInput from '../../../src/components/Search/index';

const doSearch = jest.fn();

describe('<Search />', () => {
  beforeEach(() => {
    render(<SearchInput search={doSearch} />);
  });

  it('should render form', () => {
    const $form = screen.getByRole('form');
    expect($form).toBeInTheDocument();
  });

  it('should render an input type equals search', () => {
    const $input = screen.getByRole('searchbox');
    expect($input).toHaveProperty('type', 'search');
  });

  it('should call props.doSearch() when form is submitted', async () => {
    const $form = screen.getByRole('form');
    await fireEvent.submit($form);
    expect(doSearch).toHaveBeenCalledTimes(1);
  });

  it('should call props.doSearch() whit the user input', async () => {
    const textContent = 'some text here';

    const $form = screen.getByRole('form');
    const $input = screen.getByRole('searchbox');

    await userEvent.type($input, textContent);
    await fireEvent.submit($form);

    expect(doSearch).toHaveBeenCalledWith(textContent);
  });
});

