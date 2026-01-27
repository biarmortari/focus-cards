import { useState, useContext } from "react";
import { FlashcardsContext } from "../../../contexts/FlashcardsContext";
import { Flashcard } from "../../Flashcard/Flashcard";
import { ProgressBar } from "../../ProgressBar/ProgressBar";

export function FlashcardStudy({ card }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const { markAsKnown, resetProgress } = useContext(FlashcardsContext);

  return (
    <Flashcard card={card} className="flashcard--study">
      <div className="flashcard__header">
        <span className="flashcard__category">{card.category}</span>
      </div>
      <h2 className="study-question">{card.question}</h2>
      <div className="flashcard__content">
        {!showAnswer ? (
          <button onClick={() => setShowAnswer(true)}>Reveal answer</button>
        ) : (
          <p className="flashcard__answer">{card.answer}</p>
        )}
      </div>

      <div className="flashcard__footer">
        <ProgressBar value={card.knownCount} />

        <div className="flashcard__actions">
          <button onClick={() => markAsKnown(card.id)}>I know this</button>

          <button onClick={() => resetProgress(card.id)}>Reset progress</button>
        </div>
      </div>
    </Flashcard>
  );
}
