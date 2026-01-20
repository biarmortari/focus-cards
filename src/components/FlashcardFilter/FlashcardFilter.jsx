import { useContext, useState } from "react";
import { FlashcardsContext } from "../../contexts/FlashcardsContext";

export function FlashcardFilter() {
  const { categories, selectedCategory, setSelectedCategory } =
    useContext(FlashcardsContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  const displayLabel =
    selectedCategory === "all" ? "All Categories" : selectedCategory;

  return (
    <div className="filters">
      <button
        className="filter__button_main"
        onClick={() => setIsOpen(!isOpen)}
      >
        {displayLabel}{" "}
        <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
      </button>

      {isOpen && (
        <div className="filter__menu">
          <button
            className="filter__menu-item"
            onClick={() => handleSelect("all")}
          >
            All Categories
          </button>

          {categories
            .filter((cat) => cat !== "all")
            .map((category) => (
              <button
                key={category}
                className={`filter__menu-item ${selectedCategory === category ? "active" : ""}`}
                onClick={() => handleSelect(category)}
              >
                {category}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
