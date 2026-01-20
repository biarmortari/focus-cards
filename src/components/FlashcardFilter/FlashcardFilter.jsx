import { useContext } from "react";
import { FlashcardsContext } from "../../contexts/FlashcardsContext";

export function FlashcardFilters() {
  const { categories, selectedCategory, setSelectedCategory } =
    useContext(FlashcardsContext);

  return (
    <div className="filters">
      <button onClick={() => setSelectedCategory(null)}>All Categories</button>

      {categories.map((category) => (
        <button key={category} onClick={() => setSelectedCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}
