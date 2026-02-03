import { useState, useContext, useEffect } from "react";
import { FlashcardsContext } from "../../../contexts/FlashcardsContext";
import { ProgressBar } from "../../ProgressBar/ProgressBar";
import { FlashcardControls } from "../../../components/FlashcardControls/FlashcardControls";
import { FlipCard } from "../../FlipCard/FlipCard";
import "./FlashcardStudyMode.css";
import reset from "../../../assets/images/icon-reset.svg";
import check from "../../../assets/images/icon-circle-check.svg";

export function FlashcardStudy({
  card,
  onNext,
  onPrevious,
  isFirst,
  isLast,
  currentIndex,
  total,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { markAsKnown, resetProgress } = useContext(FlashcardsContext);

  useEffect(() => setIsFlipped(false), [card.id]);

  return (
    <div className="study-container">
      <FlashcardControls />

      <hr className="divider" />

      <div className="study-main">
        <FlipCard
          card={card}
          isFlipped={isFlipped}
          onReveal={() => setIsFlipped(true)}
          progress={<ProgressBar value={card.knownCount} />}
        />

        <div className="flashcard__actions">
          <button
            onClick={() => markAsKnown(card.id)}
            className="flashcard__button know-button"
          >
            <img src={check} alt="" /> I know this
          </button>
          <button
            onClick={() => resetProgress(card.id)}
            className="flashcard__button reset-button"
          >
            <img src={reset} alt="" /> Reset progress
          </button>
        </div>
      </div>

      <hr className="divider" />

      <div className="study-navigation">
        <button
          className="study-navigation__button"
          onClick={onPrevious}
          disabled={isFirst}
        >
          &lt; <span>Previous</span>
        </button>
        <p className="study-current-card">
          Card {currentIndex + 1} of {total}
        </p>
        <button
          className="study-navigation__button"
          onClick={onNext}
          disabled={isLast}
        >
          <span>Next</span> &gt;
        </button>
      </div>
    </div>
  );
}
