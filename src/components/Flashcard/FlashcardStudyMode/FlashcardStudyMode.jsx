export function FlashcardStudy({ card }) {
  return (
    <FlashcardBase card={card}>
      <button>Click to reveal answer</button>
      <ProgressBar value={card.knownCount} />
    </FlashcardBase>
  );
}
