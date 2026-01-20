import { createContext, useState, useMemo } from "react";
import initialData from "../data/data.json";

export const FlashcardsContext = createContext();

export function FlashcardsProvider({ children }) {
  const [flashcards, setFlashcards] = useState(initialData.flashcards);
  const [selectedCategory, setSelectedCategory] = useState(null);

  function markAsKnown(cardId) {
    setFlashcards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId
          ? { ...card, knownCount: Math.min(card.knownCount + 1, 5) }
          : card,
      ),
    );
  }

  function resetProgress(cardId) {
    setFlashcards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, knownCount: 0 } : card,
      ),
    );
  }

  function getCardStatus(card) {
    if (card.knownCount === 0) return "not_started";
    if (card.knownCount >= 5) return "mastered";
    return "in_progress";
  }

  const categories = useMemo(() => {
    return [...new Set(flashcards.map((card) => card.category))];
  }, [flashcards]);

  const value = {
    flashcards,
    categories,
    selectedCategory,
    setSelectedCategory,
    markAsKnown,
    resetProgress,
    getCardStatus,
  };

  return (
    <FlashcardsContext.Provider value={value}>
      {children}
    </FlashcardsContext.Provider>
  );
}
