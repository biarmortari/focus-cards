import { useContext } from "react";
import { FlashcardsContext } from "../../contexts/FlashcardsContext";
import { FlashcardAllCards } from "../Flashcard/FlashcardAllCards/FlashcardAllCards";

export function FlashcardGrid() {
  const { flashcards, selectedCategory } = useContext(FlashcardsContext);

  const filteredFlashcards = flashcards.filter((card) => {
    if (selectedCategory === "all") {
      return true;
    }
    return card.category === selectedCategory;
  });

  return (
    <section className="flashcards">
      <ul className="flashcards__list">
        {filteredFlashcards.map((card) => (
          <FlashcardAllCards key={card.id} card={card} />
        ))}
      </ul>

      {filteredFlashcards.length === 0 && (
        <p className="flashcards__empty">
          Nenhum flashcard encontrado nesta categoria.
        </p>
      )}
    </section>
  );
}
