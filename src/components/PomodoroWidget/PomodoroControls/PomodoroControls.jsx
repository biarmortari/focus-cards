import { usePomodoro } from "../../../contexts/PomodoroContext";

export function PomodoroControls() {
  const { isRunning, start, pause, reset } = usePomodoro();

  return (
    <div className="pomodoro__controls">
      {!isRunning ? (
        <button onClick={start}>Start</button>
      ) : (
        <button onClick={pause}>Pause</button>
      )}

      <button onClick={reset}>Reset</button>
    </div>
  );
}
