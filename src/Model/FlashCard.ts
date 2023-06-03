export interface FlashCard {
    serbianTranslation: string,
    englishTranslation: string,
}

export function hasDuplicates(flashCards: FlashCard[]): boolean {
    const englishTranslations = flashCards.map(flashcard => flashcard.englishTranslation );

    return englishTranslations.some((translation, index) => englishTranslations.indexOf(translation) !== index);
}

