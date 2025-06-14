# UCITI

A language-learning flashcard web application built with Next.js.

## 🌍 Language Support

Currently supports two languages:
- **Serbian (Srpski)** - 50+ essential words and phrases
- **German (Deutsch)** - 70+ common words and phrases

## 🎯 Features

- **Interactive Flashcards**: Click cards to toggle between target language and English
- **Matching Game**: Test your knowledge by matching words in both languages
- **Customizable Learning**:
  - Adjust number of cards per page (4, 8, 10, or 12)
  - Option to hide English translations for more challenging practice
  - Shuffle cards for varied learning experience
- **Dark Mode Support**: Comfortable viewing in any lighting condition

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org)
- **Language:** [TypeScript](https://www.typescriptlang.org)
- **UI Library:** [React](https://reactjs.org)
- **Styling:** [TailwindCSS](https://tailwindcss.com)
- **Form Components:** [React Select](https://react-select.com)
- **Code Quality:** ESLint

## 🏁 Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- Bun (recommended) or npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/uciti.git
cd uciti
```

2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📝 Available Scripts

- `bun run dev` - Start the development server
- `bun run build` - Build the application for production
- `bun run start` - Start the production server
- `nbun run lint` - Run ESLint for code quality checks

## 🏗️ Project Structure

The project follows the Next.js App Router structure:

- `app/` - Main application code
- `public/` - Static assets
- `components/` - Reusable React components
- `styles/` - Global styles and Tailwind configuration

Built with ❤️ using Next.js
