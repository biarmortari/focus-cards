export function Flashcard({ card, children }) {
  return (
    <div className="flashcard">
      <p>{card.question}</p>
      {children}
    </div>
  );
}
