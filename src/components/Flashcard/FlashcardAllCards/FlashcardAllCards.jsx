import { Flashcard } from "../Flashcard";
import { ProgressBar } from "../../ProgressBar/ProgressBar";

export function FlashcardAllCards({ card }) {
  return (
    <Flashcard card={card}>
      <div className="flashcard__content">
        <p className="flashcard__answer-title">Answer:</p>
        <p className="flashcard__answer">{card.answer}</p>

        <div className="flashcard__footer">
          <span className="flashcard__category">{card.category}</span>

          <ProgressBar value={card.knownCount} />

          <div className="flashcard__menu">
            <button aria-label="Open menu">⋮</button>
            {/*dropdown*/}
          </div>
        </div>
      </div>
    </Flashcard>
  );
}
