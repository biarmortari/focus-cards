import { useState, useContext } from "react";
import { FlashcardsContext } from "../../../contexts/FlashcardsContext";
import { FlashcardStudy } from "../../../components/Flashcard/FlashcardStudyMode/FlashcardStudyMode";
import { FlashcardFilter } from "../../../components/FlashcardFilter/FlashcardFilter";
import { Stats } from "../../../components/Stats/Stats";

export function StudyMode() {
  const { visibleFlashcards } = useContext(FlashcardsContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { hideMastered, setHideMastered } = useContext(FlashcardsContext);
  const { isShuffled, setIsShuffled } = useContext(FlashcardsContext);

  if (!visibleFlashcards || visibleFlashcards.length === 0) {
    return (
      <div>
        <FlashcardFilter />
        <p>No flashcards available for study.</p>
      </div>
    );
  }

  const currentCard = visibleFlashcards[currentIndex];

  function handleNext() {
    setCurrentIndex((prevIndex) =>
      prevIndex < visibleFlashcards.length - 1 ? prevIndex + 1 : prevIndex,
    );
  }

  function handlePrevious() {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  }

  return (
    <div className="study-mode">
      <div>
        <FlashcardFilter />
        <button onClick={() => setHideMastered((prev) => !prev)}>
          {hideMastered ? "Show mastered" : "Hide mastered"}
        </button>
        <button onClick={() => setIsShuffled((prev) => !prev)}>
          {isShuffled ? "Unshuffle" : "Shuffle"}
        </button>
      </div>

      <FlashcardStudy key={currentCard.id} card={currentCard} />

      <div className="study-mode__navigation">
        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          Previous
        </button>

        <p>
          Card {currentIndex + 1} of {visibleFlashcards.length}
        </p>

        <button
          onClick={handleNext}
          disabled={currentIndex === visibleFlashcards.length - 1}
        >
          Next
        </button>
      </div>
      <Stats />
    </div>
  );
}
