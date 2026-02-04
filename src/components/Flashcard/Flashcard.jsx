export function Flashcard({ children, className = "" }) {
  return <div className={`flashcard ${className}`}>{children}</div>;
}
