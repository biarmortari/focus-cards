import { useState } from "react";
import { PomodoroTimer } from "../PomodoroTimer/PomodoroTimer";
import { PomodoroControls } from "../PomodoroControls/PomodoroControls";
import appleIcon from "../../../assets/images/apple.svg";
import "./PomodoroSideBar.css";

export function PomodoroSideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`pomodoro-sidebar ${isOpen ? "open" : "closed"}`}>
      <button
        className={`pomodoro-sidebar__toggle ${isOpen ? "is-active" : "is-collapsed"}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close Pomodoro" : "Open Pomodoro"}
      >
        {isOpen ? (
          "→"
        ) : (
          <img src={appleIcon} alt="Pomodoro" className="apple-toggle-icon" />
        )}
      </button>

      {isOpen && (
        <div className="pomodoro-sidebar__content">
          <h3 className="pomodoro-title">Pomodoro</h3>
          <PomodoroTimer />
          <PomodoroControls />
        </div>
      )}
    </aside>
  );
}
