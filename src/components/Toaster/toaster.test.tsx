import { render, screen, act } from '@testing-library/react';
import { toast } from 'react-toastify';
import Toaster from './index';

describe('Toaster with toast.promise', () => {
  it('shows pending toast message', async () => {
    const fakePromise = new Promise(() => {});
    render(<Toaster />);

    act(() => {
      toast.promise(fakePromise, {
        pending: 'Loading...',
        success: 'Success!',
        error: 'Error!',
      });
    });

    const pendingMessage = await screen.findByText('Loading...');
    expect(pendingMessage).toBeInTheDocument();
  });

  it('shows success toast message', async () => {
    const successPromise = Promise.resolve();
    render(<Toaster />);

    await act(async () => {
      toast.promise(successPromise, {
        pending: 'Loading...',
        success: 'Success!',
        error: 'Error!',
      });
    });

    const successMessage = await screen.findByText('Success!');
    expect(successMessage).toBeInTheDocument();
  });

  it('shows error toast message', async () => {
    const errorPromise = Promise.reject(new Error('Test error'));
    render(<Toaster />);

    await act(async () => {
      toast.promise(errorPromise, {
        pending: 'Loading...',
        success: 'Success!',
        error: 'Error!',
      });
    });

    const errorMessage = await screen.findByText('Error!');
    expect(errorMessage).toBeInTheDocument();
  });
});
