export interface FlashCard {
    translation: string,
    english: string,
}

export function hasDuplicates(flashCards: FlashCard[]): boolean {
    const englishTranslations = flashCards.map(flashcard => flashcard.english );

    return englishTranslations.some((translation, index) => englishTranslations.indexOf(translation) !== index);
}

