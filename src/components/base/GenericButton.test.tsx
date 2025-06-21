import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GenericButton from './GenericButton';

describe('GenericButton', () => {
  it('renders both large and small text spans', () => {
    render(<GenericButton text="Click Me" onClick={() => {}} />);
    // Both spans should be present
    const largeText = screen.getByTestId('large-text-span');
    const smallText = screen.getByTestId('small-text-span');
    expect(largeText).toHaveTextContent('Click Me');
    expect(smallText).toHaveTextContent('Click Me');
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<GenericButton text="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });
}); 