import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FlashCardView } from './FlashCardView';
import { FlashCard } from '../model/FlashCard';

const mockFlashCard: FlashCard = {
  translation: 'hvala',
  english: 'thank you'
};

describe('FlashCardView', () => {
  it('renders flashcard with English visible when hideEnglish is false', () => {
    render(
      <FlashCardView 
        flashCard={mockFlashCard} 
        hideEnglish={false} 
      />
    );
    
    expect(screen.getByText('thank you')).toBeInTheDocument();
  });

  it('renders flashcard with translation visible when hideEnglish is true', () => {
    render(
      <FlashCardView 
        flashCard={mockFlashCard} 
        hideEnglish={true} 
      />
    );
    
    expect(screen.getByText('hvala')).toBeInTheDocument();
  });

  it('toggles between English and translation when clicked', () => {
    render(
      <FlashCardView 
        flashCard={mockFlashCard} 
        hideEnglish={false} 
      />
    );
    
    // Initially shows English
    expect(screen.getByText('thank you')).toBeInTheDocument();
    
    // Click to toggle
    fireEvent.click(screen.getByText('thank you'));
    
    // Should now show translation
    expect(screen.getByText('hvala')).toBeInTheDocument();
    expect(screen.queryByText('thank you')).not.toBeInTheDocument();
  });

  it('does not toggle when preventFlip is true', () => {
    render(
      <FlashCardView 
        flashCard={mockFlashCard} 
        hideEnglish={false} 
        preventFlip={true}
      />
    );
    
    // Initially shows English
    expect(screen.getByText('thank you')).toBeInTheDocument();
    
    // Click should not toggle
    fireEvent.click(screen.getByText('thank you'));
    
    // Should still show English
    expect(screen.getByText('thank you')).toBeInTheDocument();
  });

  it('updates display when hideEnglish prop changes', () => {
    const { rerender } = render(
      <FlashCardView 
        flashCard={mockFlashCard} 
        hideEnglish={false} 
      />
    );
    
    expect(screen.getByText('thank you')).toBeInTheDocument();
    
    // Change hideEnglish prop
    rerender(
      <FlashCardView 
        flashCard={mockFlashCard} 
        hideEnglish={true} 
      />
    );
    
    expect(screen.getByText('hvala')).toBeInTheDocument();
  });
});