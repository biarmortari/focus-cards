import { FlashcardGrid } from "../../../components/FlashcardGrid/FlashcardGrid";
import { FlashcardForm } from "../../../components/FlashcardForm/FlashcardForm";
import { FlashcardFilter } from "../../../components/FlashcardFilter/FlashcardFilter";
import { FlashcardsContext } from "../../../contexts/FlashcardsContext";
import { useContext } from "react";

export function AllCards() {
  const { addFlashcard } = useContext(FlashcardsContext);
  const { hideMastered, setHideMastered } = useContext(FlashcardsContext);
  const { isShuffled, setIsShuffled } = useContext(FlashcardsContext);

  return (
    <section>
      <FlashcardForm onSubmit={addFlashcard} />
      <div>
        <FlashcardFilter />
        <button onClick={() => setHideMastered((prev) => !prev)}>
          {hideMastered ? "Show mastered" : "Hide mastered"}
        </button>
        <button onClick={() => setIsShuffled((prev) => !prev)}>
          {isShuffled ? "Unshuffle" : "Shuffle"}
        </button>
      </div>
      <FlashcardGrid />
    </section>
  );
}
