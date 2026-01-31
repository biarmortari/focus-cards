import { useState, useContext } from "react";
import { FlashcardsContext } from "../../../contexts/FlashcardsContext";
import { FlashcardStudy } from "../../../components/Flashcard/FlashcardStudyMode/FlashcardStudyMode";
import { FlashcardFilter } from "../../../components/FlashcardFilter/FlashcardFilter";

import { Stats } from "../../../components/Stats/Stats";

export function StudyMode() {
  const { visibleFlashcards } = useContext(FlashcardsContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!visibleFlashcards || visibleFlashcards.length === 0) {
    return (
      <div className="study-mode">
        <FlashcardFilter />
        <p>No flashcards available for study.</p>
      </div>
    );
  }

  const handleNext = () => {
    if (currentIndex < visibleFlashcards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="study-mode">
      <FlashcardStudy
        card={visibleFlashcards[currentIndex]}
        onNext={handleNext}
        onPrevious={handlePrevious}
        isFirst={currentIndex === 0}
        isLast={currentIndex === visibleFlashcards.length - 1}
        currentIndex={currentIndex}
        total={visibleFlashcards.length}
      />
      <Stats />
    </div>
  );
}
