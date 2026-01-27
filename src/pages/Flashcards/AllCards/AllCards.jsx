import { FlashcardGrid } from "../../../components/FlashcardGrid/FlashcardGrid";
import { FlashcardForm } from "../../../components/FlashcardForm/FlashcardForm";
import { FlashcardFilter } from "../../../components/FlashcardFilter/FlashcardFilter";
import { FlashcardsContext } from "../../../contexts/FlashcardsContext";
import { FlashcardControls } from "../../../components/FlashcardControls/FlashcardControls";
import { useContext } from "react";

export function AllCards() {
  const { addFlashcard } = useContext(FlashcardsContext);

  return (
    <section>
      <FlashcardForm onSubmit={addFlashcard} />
      <div>
        <FlashcardControls />
      </div>
      <FlashcardGrid />
    </section>
  );
}
