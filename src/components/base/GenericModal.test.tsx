import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GenericModal from './GenericModal';

describe('GenericModal', () => {
  it('renders with title and children', () => {
    render(
      <GenericModal title="Test Modal" closeHandler={() => {}}>
        <div>Modal Content</div>
      </GenericModal>
    );
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('calls closeHandler when close button is clicked', () => {
    const handleClose = jest.fn();
    render(
      <GenericModal title="Test Modal" closeHandler={handleClose}>
        <div>Modal Content</div>
      </GenericModal>
    );
    fireEvent.click(screen.getByTestId('close-button'));
    expect(handleClose).toHaveBeenCalled();
  });
}); 