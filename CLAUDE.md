# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start Next.js development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks
- `npm run test` - Run Jest tests with coverage

## Architecture Overview

UCITI is a language-learning flashcard application built with Next.js 15 and React 19. The application supports Serbian (SR) and German (DE) language learning through interactive flashcards and matching games.

### Key Architectural Components

**State Management**: Uses React Context for global state management with two primary contexts:
- `ConfigurationContext` - Manages app settings (language, cards per page, hide English mode, matching game mode)
- `FlashCardContext` - Manages flashcard data and selection logic

**Data Layer**: 
- `FlashCardData.ts` contains hardcoded vocabulary for Serbian and German
- `FlashCard.ts` defines the core data model and utility functions
- Language selection determines which dataset is loaded

**Component Structure**:
- `FlashCardStack` - Main card display component
- `FlashCardControlBar` - Configuration controls and navigation
- `FlashCardView` - Individual flashcard display
- `MatchCardView` - Matching game interface
- `Notes` - Additional learning notes display

**Utility Functions**:
- `RandomUtils.ts` - Card shuffling and random selection logic
- Includes duplicate detection for data integrity

### Testing Setup

- Jest with ts-jest preset for TypeScript support
- jsdom environment for React component testing
- Coverage reporting configured
- Test files follow `.test.ts` and `.test.tsx` naming convention

### Styling

- TailwindCSS for styling with dark mode support
- Next.js App Router structure
- Responsive design with mobile-first approach

## Key Implementation Details

**Language Data**: Flashcard data is stored as arrays of objects with `translation` and `english` properties. The `getAllFlashCards(language)` function returns the appropriate dataset based on language selection.

**State Flow**: Configuration changes trigger flashcard re-selection through context effects. The app maintains separate stacks for matching games with shuffled card orders.

**Component Hierarchy**: The app uses a nested context provider pattern where `ConfigurationProvider` wraps `FlashCardProvider` to ensure proper dependency injection.