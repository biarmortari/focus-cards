import { createContext, useState, useMemo } from "react";
import initialData from "../data/data.json";

export const FlashcardsContext = createContext();

export function FlashcardsProvider({ children }) {
  const [flashcards, setFlashcards] = useState(initialData.flashcards);
  const [selectedCategory, setSelectedCategory] = useState("all");

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

  function addFlashcard({ question, answer, category }) {
    const newCard = {
      id: crypto.randomUUID(),
      question: question.trim(),
      answer: answer.trim(),
      category: category.trim(),
      knownCount: 0,
    };

    setFlashcards((prevCards) => [...prevCards, newCard]);
  }

  const categories = useMemo(() => {
    const uniqueCategories = new Set(flashcards.map((card) => card.category));

    return ["all", ...uniqueCategories];
  }, [flashcards]);

  const filteredFlashcards =
    selectedCategory === "all"
      ? flashcards
      : flashcards.filter((card) => card.category === selectedCategory);

  const value = {
    flashcards,
    setFlashcards,
    categories,
    selectedCategory,
    setSelectedCategory,
    filteredFlashcards,
    setSelectedCategory,
    markAsKnown,
    resetProgress,
    getCardStatus,
    addFlashcard,
  };

  return (
    <FlashcardsContext.Provider value={value}>
      {children}
    </FlashcardsContext.Provider>
  );
}
