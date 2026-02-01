import { usePomodoro } from "../../../contexts/PomodoroContext";
import "./PomodoroTimer.css";

export function PomodoroTimer() {
  const { timeLeft, mode } = usePomodoro();

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  }

  function getModeLabel(currentMode) {
    if (currentMode === "focus") return "Focus";
    if (currentMode === "shortBreak") return "Short Break";
    if (currentMode === "longBreak") return "Long Break";
  }

  return (
    <div className={`pomodoro pomodoro--${mode}`}>
      <p className="pomodoro__mode">{getModeLabel(mode)}</p>
      <span className="pomodoro__time">{formatTime(timeLeft)}</span>
    </div>
  );
}
