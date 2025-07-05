import { getAllFlashCards } from './FlashCardData';

describe('FlashCardData', () => {
  describe('getAllFlashCards', () => {
    it('returns Serbian flashcards when language is SR', () => {
      const cards = getAllFlashCards('SR');
      
      expect(cards.length).toBeGreaterThan(0);
      expect(cards[0]).toHaveProperty('translation');
      expect(cards[0]).toHaveProperty('english');
      
      // Check for some known Serbian words
      const translations = cards.map(card => card.translation);
      expect(translations).toContain('hvala');
      expect(translations).toContain('mačka');
    });

    it('returns German flashcards when language is DE', () => {
      const cards = getAllFlashCards('DE');
      
      expect(cards.length).toBeGreaterThan(0);
      expect(cards[0]).toHaveProperty('translation');
      expect(cards[0]).toHaveProperty('english');
      
      // Check for some known German words
      const translations = cards.map(card => card.translation);
      expect(translations).toContain('danke');
      expect(translations).toContain('katze');
    });

    it('returns empty array for unknown language', () => {
      const cards = getAllFlashCards('FR');
      
      expect(cards).toEqual([]);
    });

    it('returns empty array for empty string', () => {
      const cards = getAllFlashCards('');
      
      expect(cards).toEqual([]);
    });

    it('ensures all Serbian cards have required properties', () => {
      const cards = getAllFlashCards('SR');
      
      cards.forEach(card => {
        expect(card).toHaveProperty('translation');
        expect(card).toHaveProperty('english');
        expect(typeof card.translation).toBe('string');
        expect(typeof card.english).toBe('string');
        expect(card.translation.length).toBeGreaterThan(0);
        expect(card.english.length).toBeGreaterThan(0);
      });
    });

    it('ensures all German cards have required properties', () => {
      const cards = getAllFlashCards('DE');
      
      cards.forEach(card => {
        expect(card).toHaveProperty('translation');
        expect(card).toHaveProperty('english');
        expect(typeof card.translation).toBe('string');
        expect(typeof card.english).toBe('string');
        expect(card.translation.length).toBeGreaterThan(0);
        expect(card.english.length).toBeGreaterThan(0);
      });
    });
  });
});