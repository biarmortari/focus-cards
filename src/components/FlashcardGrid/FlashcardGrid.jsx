import { useContext } from "react";
import FlashcardsContext from "../../contexts/FlashcardsContext";
import { Flashcard } from "../Flashcard/Flashcard";

export function FlashcardGrid() {
  const { flashcards } = useContext(FlashcardsContext);

  return (
    <section className="flashcards">
      <ul className="flashcards__list">
        {flashcards.map((card) => (
          <Flashcard key={card.id} card={card} />
        ))}
      </ul>
    </section>
  );
}
