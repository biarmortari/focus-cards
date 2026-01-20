import { Link } from "react-router-dom";
import { useState } from "react";
import { AllCards } from "../Flashcards/AllCards/AllCards";
import { StudyMode } from "../Flashcards/StudyMode/StudyMode";

export function Flashcards() {
  const [mode, setMode] = useState("all");

  return (
    <>
      <header>
        <Link to="/">
          <button>Voltar para a home</button>
        </Link>
        <div>
          <button onClick={() => setMode("study")} disabled={mode === "study"}>
            Study Mode
          </button>
          <button onClick={() => setMode("all")} disabled={mode === "all"}>
            All Cards
          </button>
        </div>
      </header>
      <main>
        {mode === "all" && <AllCards />}
        {mode === "study" && <StudyMode />}
      </main>
    </>
  );
}
