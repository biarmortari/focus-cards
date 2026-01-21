import { FlashcardGrid } from "../../../components/FlashcardGrid/FlashcardGrid";
import { FlashcardForm } from "../../../components/FlashcardForm/FlashcardForm";
import { FlashcardFilter } from "../../../components/FlashcardFilter/FlashcardFilter";
import { FlashcardsContext } from "../../../contexts/FlashcardsContext";
import { useContext } from "react";

export function AllCards() {
  const { addFlashcard } = useContext(FlashcardsContext);

  return (
    <section>
      <FlashcardForm onSubmit={addFlashcard} />
      <FlashcardFilter />
      <FlashcardGrid />
    </section>
  );
}
