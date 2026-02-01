import { useState } from "react";
import { PomodoroTimer } from "../PomodoroTimer/PomodoroTimer";
import { PomodoroControls } from "../PomodoroControls/PomodoroControls";
import appleIcon from "../../../assets/images/apple.svg"; // Garanta que o caminho esteja correto
import "./PomodoroSidebar.css";

export function PomodoroSidebar() {
  const [isOpen, setIsOpen] = useState(false); // Começar fechado é comum em sidebars

  return (
    <aside className={`pomodoro-sidebar ${isOpen ? "open" : "closed"}`}>
      <button
        className="pomodoro-sidebar__toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close Pomodoro" : "Open Pomodoro"}
      >
        {/* Se estiver aberto, seta. Se fechado, a maçã. */}
        {isOpen ? (
          "→"
        ) : (
          <img src={appleIcon} alt="Pomodoro" className="apple-toggle-icon" />
        )}
      </button>

      {isOpen && (
        <div className="pomodoro-sidebar__content">
          <h3 className="pomodoro-title">Focus Timer</h3>
          <PomodoroTimer />
          <PomodoroControls />
        </div>
      )}
    </aside>
  );
}
