import {render, screen} from '@testing-library/react';
import SigninForm from './index';

describe('SigninForm', () => {
    it('renders SigninForm component', () => {
        render(<SigninForm />);
        const linkElement = screen.getByTestId("signin-form");
        expect(linkElement).toBeInTheDocument();
    });
    it('renders email input', () => {
        render(<SigninForm />);
        const emailInput = screen.getByTestId("email-input");
        expect(emailInput).toBeInTheDocument();
    });
    it('renders password input', () => {
        render(<SigninForm />);
        const passwordInput = screen.getByTestId("password-input");
        expect(passwordInput).toBeInTheDocument();
    });
});