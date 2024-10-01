import   {render , screen} from '@testing-library/react';
import CartPage from './page';

it('renders the cart page', () => {
  render(<CartPage />);
  const heading = screen.getByTestId('cart-title');
  expect(heading).toBeInTheDocument();
}
);