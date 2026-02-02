import { usePomodoro } from "../../../contexts/PomodoroContext";
import "./PomodoroControls.css";

export function PomodoroControls() {
  const { isRunning, start, pause, reset } = usePomodoro();

  return (
    <div className="pomodoro__controls">
      {!isRunning ? (
        <button onClick={start} className="pomodoro__button">
          Start
        </button>
      ) : (
        <button onClick={pause} className="pomodoro__button">
          Pause
        </button>
      )}

      <button onClick={reset} className="pomodoro__button">
        Reset
      </button>
    </div>
  );
}
