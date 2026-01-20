import { FlashcardGrid } from "../../../components/FlashcardGrid/FlashcardGrid";
import { FlashcardForm } from "../../../components/FlashcardForm/FlashcardForm";
import { FlashcardFilter } from "../../../components/FlashcardFilter/FlashcardFilter";

export function AllCards() {
  return (
    <section>
      <FlashcardForm />
      <FlashcardFilter />
      <FlashcardGrid />
    </section>
  );
}
