import { useContext, useState } from "react";
import { FlashcardsContext } from "../../contexts/FlashcardsContext";
import "./FlashcardFilter.css";

export function FlashcardFilter() {
  const { categories, selectedCategory, setSelectedCategory } =
    useContext(FlashcardsContext);

  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  return (
    <div className="filters">
      <button
        className="filter__button_main"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedCategory === "all" ? "All Categories" : selectedCategory}
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

          {categories.map((category) => (
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
