import { Link } from "react-router-dom";
import { useState } from "react";
import { AllCards } from "../Flashcards/AllCards/AllCards";
import { StudyMode } from "../Flashcards/StudyMode/StudyMode";
import "./Flashcards.css";

export function Flashcards() {
  const [mode, setMode] = useState("all");

  return (
    <div className="flashcards__wrapper">
      <header className="flashcards__header">
        <Link to="/">
          <button className="header__button-home"> &#8592; Back to Home</button>
        </Link>
        <div className="header__button-mode">
          <button
            onClick={() => setMode("study")}
            disabled={mode === "study"}
            className={`header__button ${mode === "study" ? "active" : ""}`}
          >
            Study Mode
          </button>
          <button
            onClick={() => setMode("all")}
            disabled={mode === "all"}
            className={`header__button ${mode === "all" ? "active" : ""}`}
          >
            All Cards
          </button>
        </div>
      </header>
      <main>
        {mode === "all" && <AllCards />}
        {mode === "study" && <StudyMode />}
      </main>
    </div>
  );
}
