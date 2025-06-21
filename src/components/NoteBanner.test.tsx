import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { NoteBanner } from './NoteBanner';

describe('NoteBanner', () => {
  it('renders with text prop', () => {
    render(<NoteBanner text="Info message" />);
    expect(screen.getByText('Info message')).toBeInTheDocument();
  });

  it('renders with children if text is not provided', () => {
    render(<NoteBanner>Child content</NoteBanner>);
    expect(screen.getByText('Child content')).toBeInTheDocument();
  });
}); 