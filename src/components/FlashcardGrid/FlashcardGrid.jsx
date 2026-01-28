import { useContext, useState } from "react";
import { FlashcardsContext } from "../../contexts/FlashcardsContext";
import { FlashcardAllCards } from "../Flashcard/FlashcardAllCards/FlashcardAllCards";
import "./FlashcardGrid.css";

export function FlashcardGrid() {
  const { visibleFlashcards } = useContext(FlashcardsContext);
  const [visibleCount, setVisibleCount] = useState(6);

  const displayedCards = visibleFlashcards.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <section className="flashcards">
      <ul className="flashcards__list">
        {displayedCards.map((card) => (
          <FlashcardAllCards key={card.id} card={card} />
        ))}
      </ul>

      {visibleFlashcards.length === 0 && (
        <p className="flashcards__empty">
          No flashcards found with the current filters.
        </p>
      )}

      {visibleCount < visibleFlashcards.length && (
        <button className="load-more-btn" onClick={loadMore}>
          Load More
        </button>
      )}
    </section>
  );
}
