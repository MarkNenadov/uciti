import { FlashCard, hasDuplicates } from './FlashCard';

describe('FlashCard', () => {
  describe('hasDuplicates', () => {
    it('returns false when there are no duplicates', () => {
      const flashCards: FlashCard[] = [
        { translation: 'hvala', english: 'thank you' },
        { translation: 'mačka', english: 'cat' },
        { translation: 'promislio', english: 'thought' }
      ];
      
      expect(hasDuplicates(flashCards)).toBe(false);
    });

    it('returns true when there are duplicate English translations', () => {
      const flashCards: FlashCard[] = [
        { translation: 'hvala', english: 'thank you' },
        { translation: 'zahvaljujemo', english: 'thank you' },
        { translation: 'mačka', english: 'cat' }
      ];
      
      expect(hasDuplicates(flashCards)).toBe(true);
    });

    it('returns false for empty array', () => {
      const flashCards: FlashCard[] = [];
      
      expect(hasDuplicates(flashCards)).toBe(false);
    });

    it('returns false for single flashcard', () => {
      const flashCards: FlashCard[] = [
        { translation: 'hvala', english: 'thank you' }
      ];
      
      expect(hasDuplicates(flashCards)).toBe(false);
    });

    it('handles case sensitivity correctly', () => {
      const flashCards: FlashCard[] = [
        { translation: 'hvala', english: 'Thank you' },
        { translation: 'zahvaljujemo', english: 'thank you' }
      ];
      
      expect(hasDuplicates(flashCards)).toBe(false);
    });
  });
});