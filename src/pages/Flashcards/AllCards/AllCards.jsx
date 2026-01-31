import { FlashcardGrid } from "../../../components/FlashcardGrid/FlashcardGrid";
import { FlashcardForm } from "../../../components/FlashcardForm/FlashcardForm";
import { FlashcardsContext } from "../../../contexts/FlashcardsContext";
import { FlashcardControls } from "../../../components/FlashcardControls/FlashcardControls";
import { useContext } from "react";

export function AllCards() {
  const { addFlashcard } = useContext(FlashcardsContext);

  return (
    <section className="all-cards">
      <FlashcardForm onSubmit={addFlashcard} />
      <div>
        <FlashcardControls />
      </div>
      <FlashcardGrid />
    </section>
  );
}
