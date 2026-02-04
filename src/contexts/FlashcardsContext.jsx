import { createContext, useState, useMemo } from "react";
import initialData from "../data/data.json";

export const FlashcardsContext = createContext();

export function FlashcardsProvider({ children }) {
  const [flashcards, setFlashcards] = useState(initialData.flashcards);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hideMastered, setHideMastered] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);

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

  function deleteFlashcard(id) {
    setFlashcards((prevCards) => prevCards.filter((card) => card.id !== id));
  }

  function editFlashcard(id, updatedData) {
    setFlashcards((prevFlashcards) =>
      prevFlashcards.map((card) =>
        card.id === id ? { ...card, ...updatedData } : card,
      ),
    );
  }

  function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  const categories = useMemo(() => {
    const uniqueCategories = new Set(flashcards.map((card) => card.category));

    return ["all", ...uniqueCategories];
  }, [flashcards]);

  const visibleFlashcards = useMemo(() => {
    let cards =
      selectedCategory === "all"
        ? flashcards
        : flashcards.filter((card) => card.category === selectedCategory);

    if (hideMastered) {
      cards = cards.filter((card) => card.knownCount < 5);
    }

    if (isShuffled) {
      cards = shuffleArray(cards);
    }

    return cards;
  }, [flashcards, selectedCategory, hideMastered, isShuffled]);

  const stats = useMemo(() => {
    const total = flashcards.length;

    const mastered = flashcards.filter((card) => card.knownCount >= 5).length;

    const notStarted = flashcards.filter(
      (card) => card.knownCount === 0,
    ).length;

    const inProgress = total - mastered - notStarted;

    return { total, mastered, notStarted, inProgress };
  }, [flashcards]);

  const value = {
    flashcards,
    setFlashcards,
    categories,
    selectedCategory,
    setSelectedCategory,
    visibleFlashcards,
    markAsKnown,
    resetProgress,
    getCardStatus,
    addFlashcard,
    deleteFlashcard,
    editFlashcard,
    hideMastered,
    setHideMastered,
    isShuffled,
    setIsShuffled,
    stats,
  };

  return (
    <FlashcardsContext.Provider value={value}>
      {children}
    </FlashcardsContext.Provider>
  );
}
