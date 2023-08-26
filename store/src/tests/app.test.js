/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Test elements', () => {
  beforeEach(() => {
    render(<App/>);
  });
  it('Test if elements are renderizing', async () => {
    expect(screen.getByRole('link', { name: /my store/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /products/i })).toBeInTheDocument();
    expect(screen.getByText('Size')).toBeInTheDocument();
    expect(screen.getByText('Foot Size')).toBeInTheDocument();
    expect(screen.getByText('Type')).toBeInTheDocument();
    expect(screen.getByText('Sport')).toBeInTheDocument();
    expect(screen.getAllByRole('combobox')).toHaveLength(4);
    expect(screen.getAllByTestId('card')).toHaveLength(5);
    expect(screen.getByText(/camiseta do brasil/i)).toBeInTheDocument();
    expect(screen.getByText(/349.99/i)).toBeInTheDocument();
    expect(screen.getByText(/regata do chicago bulls/i)).toBeInTheDocument();
    expect(screen.getByText(/499.99/i)).toBeInTheDocument();
    expect(screen.getByText(/calção da puma/i)).toBeInTheDocument();
    expect(screen.getByText(/99.69/i)).toBeInTheDocument();
    expect(screen.getByText(/calção da nike/i)).toBeInTheDocument();
    expect(screen.getByText(/109.69/i)).toBeInTheDocument();
    expect(screen.getByText(/meia da jordan/i)).toBeInTheDocument();
    expect(screen.getByText(/119.69/i)).toBeInTheDocument();
    expect(screen.getAllByText(/All sizes/i)).toHaveLength(2);
    expect(screen.getByText(/All types/i)).toBeInTheDocument();
    expect(screen.getByText(/all sports/i)).toBeInTheDocument();
    expect(screen.getByTestId('cartBtn')).toBeInTheDocument();
  });
});

describe('Test Filters', () => {
  beforeEach(() => {
    render(<App/>);
  });
  it('Test Filter by Size', async () => {
    const sizeFilter = screen.getAllByRole('combobox')[0];

    await userEvent.selectOptions(sizeFilter, 'GG');
    expect(screen.getAllByTestId('card')).toHaveLength(1);

    await userEvent.selectOptions(sizeFilter, 'P');
    expect(screen.getAllByTestId('card')).toHaveLength(3);
  });

  it('Test Filter by Foot Size', async () => {
    const footFilter = screen.getAllByRole('combobox')[1];

    await userEvent.selectOptions(footFilter, '44');
    expect(screen.getAllByTestId('card')).toHaveLength(1);

    await userEvent.selectOptions(footFilter, 'All sizes');
    expect(screen.getAllByTestId('card')).toHaveLength(5);
  });

  it('Test Filter by Type', async () => {
    const typeFilter = screen.getAllByRole('combobox')[2];

    await userEvent.selectOptions(typeFilter, 'Camiseta');
    expect(screen.getAllByTestId('card')).toHaveLength(1);

    await userEvent.selectOptions(typeFilter, 'Calção');
    expect(screen.getAllByTestId('card')).toHaveLength(2);
  });

  it('Test Filter by Sport', async () => {
    const sportFilter = screen.getAllByRole('combobox')[3];

    await userEvent.selectOptions(sportFilter, 'Futebol');
    expect(screen.getAllByTestId('card')).toHaveLength(1);

    await userEvent.selectOptions(sportFilter, 'Basquete');
    expect(screen.getAllByTestId('card')).toHaveLength(2);

    await userEvent.selectOptions(sportFilter, 'Corrida');
    expect(screen.getAllByTestId('card')).toHaveLength(2);
  });

  it('Test Filter by Foot Size and Type', async () => {
    const footFilter = screen.getAllByRole('combobox')[1];
    const typeFilter = screen.getAllByRole('combobox')[2];

    await userEvent.selectOptions(footFilter, '44');
    await userEvent.selectOptions(typeFilter, 'Acessório');
    expect(screen.getAllByTestId('card')).toHaveLength(1);
    
    await userEvent.selectOptions(typeFilter, 'Camiseta');
    expect(screen.getByText(/no items found./i)).toBeInTheDocument();
    
    await userEvent.selectOptions(typeFilter, 'All types');
    await userEvent.selectOptions(footFilter, 'All sizes');
    expect(screen.getAllByTestId('card')).toHaveLength(5);
  });

  it('Test Filter by Size and Sport', async () => {
    const sizeFilter = screen.getAllByRole('combobox')[0];
    const sportFilter = screen.getAllByRole('combobox')[3];

    await userEvent.selectOptions(sizeFilter, 'M');
    await userEvent.selectOptions(sportFilter, 'Basquete');
    expect(screen.getAllByTestId('card')).toHaveLength(1);
    
    await userEvent.selectOptions(sizeFilter, 'All sizes');
    expect(screen.getAllByTestId('card')).toHaveLength(2);
  });

  it('Test Filter by Size and Sport', async () => {
    const sizeFilter = screen.getAllByRole('combobox')[0];
    const typeFilter = screen.getAllByRole('combobox')[2];
    const sportFilter = screen.getAllByRole('combobox')[3];
    
    await userEvent.selectOptions(sizeFilter, 'G');
    await userEvent.selectOptions(typeFilter, 'Camiseta');
    await userEvent.selectOptions(sportFilter, 'Basquete');
    expect(screen.getByText(/no items found./i)).toBeInTheDocument();
    
    await userEvent.selectOptions(sportFilter, 'Futebol');
    expect(screen.getAllByTestId('card')).toHaveLength(1);
  });
});

describe('Test Modals', () => {
  beforeEach(() => {
    render(<App/>);
  });
  it('Test if elements are renderizing when clicked', async () => {
    const brasil = screen.getAllByTestId('card')[0];
    await userEvent.click(brasil);
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument();
    
    await userEvent.click(brasil);
    const cartBtn = screen.getByTestId('cartBtn');
    await userEvent.click(cartBtn);
    expect(screen.getByText(/cart/i)).toBeInTheDocument();
  });

  it('Test if elements are renderizing when clicked', async () => {
    const brasil = screen.getAllByTestId('card')[0];
    await userEvent.click(brasil);
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument();
    
    await userEvent.click(brasil);
    const cartBtn = screen.getByTestId('cartBtn');
    await userEvent.click(cartBtn);
    expect(screen.getByText(/cart/i)).toBeInTheDocument();
  });

  it('Test adding items to cart', async () => {
    const cartBtn = screen.getByTestId('cartBtn');
    await userEvent.click(cartBtn);
    expect(screen.getByText(/0.00/i)).toBeInTheDocument();

    const brasil = screen.getAllByTestId('card')[0];
    const bulls = screen.getAllByTestId('card')[1];

    await userEvent.click(brasil);
    await userEvent.click(screen.getByRole('button', { name: /add to cart/i }));
    await userEvent.click(screen.getByRole('button', { name: /add to cart/i }));
    await userEvent.click(cartBtn);
    await userEvent.click(cartBtn);
    expect(screen.getAllByText(/699.98/i)).toHaveLength(2);

    await userEvent.click(brasil);
    await userEvent.click(bulls);
    await userEvent.click(screen.getByRole('button', { name: /add to cart/i }));
    await userEvent.click(cartBtn);
    await userEvent.click(cartBtn);
    expect(screen.getByText(/1199.97/i)).toBeInTheDocument();
    expect(screen.getAllByTestId(/modalCartCard/i)).toHaveLength(2);

    await userEvent.click(screen.getAllByTestId(/excludeBtn/i)[0]);
    expect(screen.getAllByTestId(/modalCartCard/i)).toHaveLength(1);
  });
});