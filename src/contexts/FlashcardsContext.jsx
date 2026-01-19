import { createContext, useContext, useState } from "react";
import initialData from "../data/data.json";

const FlashcardsContext = React.createContext();

export default function FlashcardsProvider({ children }) {
  const [flashcards, setFlashcards] = useState(initialData);

  function maskAsKnown(cardId) {
    setFlashcards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, knowCount: card.knowCount + 1 } : card,
      ),
    );
  }

  function resetProgress(cardId) {
    setFlashcards((prevCards) =>
      prevCards.map(
        (card = card.id === cardId ? { ...card, knowCount: 0 } : card),
      ),
    );
  }

  function getCardStatus(card) {
    if (card.knowCount === 0) return "not_started";
    if (card.knowCount >= 5) return "mastered";
    return "in_progress";
  }

  const value = {
    flashcards,
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
