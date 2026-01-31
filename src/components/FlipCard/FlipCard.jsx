import "./FlipCard.css";

export function FlipCard({ isFlipped, card, onReveal, progress }) {
  return (
    <div className={`flip-card ${isFlipped ? "is-flipped" : ""}`}>
      <div className="flip-card__inner">
        <div className="flip-card__front">
          <span className="card-category">{card.category}</span>
          <p className="flashcard-study__question">{card.question}</p>
          <button className="reveal-btn" onClick={onReveal}>
            Reveal answer
          </button>
          <div className="progress-container">{progress}</div>
        </div>

        <div className="flip-card__back">
          <p className="flashcard-study__answer">{card.answer}</p>
          <div className="progress-container">{progress}</div>
        </div>
      </div>
    </div>
  );
}
