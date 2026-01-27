import { useContext } from "react";
import { FlashcardsContext } from "../../contexts/FlashcardsContext";
import { FlashcardAllCards } from "../Flashcard/FlashcardAllCards/FlashcardAllCards";
import "./FlashcardGrid.css";

export function FlashcardGrid() {
  const { visibleFlashcards } = useContext(FlashcardsContext);

  return (
    <section className="flashcards">
      <ul className="flashcards__list">
        {visibleFlashcards.map((card) => (
          <FlashcardAllCards key={card.id} card={card} />
        ))}
      </ul>

      {visibleFlashcards.length === 0 && (
        <p className="flashcards__empty">
          No flashcards found with the current filters.
        </p>
      )}
    </section>
  );
}
