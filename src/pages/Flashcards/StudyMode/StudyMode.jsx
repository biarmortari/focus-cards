import { useState, useContext } from "react";
import { FlashcardsContext } from "../../../contexts/FlashcardsContext";
import { FlashcardStudy } from "../../../components/Flashcard/FlashcardStudyMode/FlashcardStudyMode";
import { FlashcardFilter } from "../../../components/FlashcardFilter/FlashcardFilter";

export function StudyMode() {
  const { filteredFlashcards } = useContext(FlashcardsContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!filteredFlashcards || filteredFlashcards.length === 0) {
    return (
      <div>
        <FlashcardFilter />
        <p>No flashcards available for study.</p>
      </div>
    );
  }

  const currentCard = filteredFlashcards[currentIndex];

  function handleNext() {
    setCurrentIndex((prevIndex) =>
      prevIndex < filteredFlashcards.length - 1 ? prevIndex + 1 : prevIndex,
    );
  }

  function handlePrevious() {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  }

  return (
    <div className="study-mode">
      <FlashcardFilter />

      <FlashcardStudy key={currentCard.id} card={currentCard} />

      <div className="study-mode__navigation">
        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          Previous
        </button>

        <p>
          Card {currentIndex + 1} of {filteredFlashcards.length}
        </p>

        <button
          onClick={handleNext}
          disabled={currentIndex === filteredFlashcards.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
