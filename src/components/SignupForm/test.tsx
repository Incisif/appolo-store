import {render, screen} from '@testing-library/react';
import SignupForm from './index';

describe('SignupForm', () => {
    it('renders the signup form', () => {
        render(<SignupForm />);
        const signupForm = screen.getByTestId('signup-form');
        expect(signupForm).toBeInTheDocument();
    });
    it('renders the email input', () => {
        render(<SignupForm />);
        const emailInput = screen.getByTestId('email-input');
        expect(emailInput).toBeInTheDocument();
    });
    it('renders the password input', () => {
        render(<SignupForm />);
        const passwordInput = screen.getByTestId('password-input');
        expect(passwordInput).toBeInTheDocument();
    });
    it('renders the first name input', () => {
        render(<SignupForm />);
        const firstNameInput = screen.getByTestId('firstName-input');
        expect(firstNameInput).toBeInTheDocument();
    });
    it('renders the first name input', () => {
        render(<SignupForm />);
        const firstNameInput = screen.getByTestId('firstName-input');
        expect(firstNameInput).toBeInTheDocument();
    })
});