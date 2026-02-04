import { createContext, useState, useRef, useEffect, useContext } from "react";

export const PomodoroContext = createContext();

const FOCUS_TIME = 25 * 60;
const SHORT_BREAK_TIME = 5 * 60;
const LONG_BREAK_TIME = 15 * 60;

export function PomodoroProvider({ children }) {
  const [mode, setMode] = useState("focus");
  const [timeLeft, setTimeLeft] = useState(FOCUS_TIME);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);

  function getTimeByMode(selectedMode) {
    if (selectedMode === "focus") return FOCUS_TIME;
    if (selectedMode === "shortBreak") return SHORT_BREAK_TIME;
    if (selectedMode === "longBreak") return LONG_BREAK_TIME;
  }

  function getNextMode(currentMode) {
    if (currentMode === "focus") return "shortBreak";
    return "focus";
  }

  function switchMode(nextMode) {
    setMode(nextMode);
    setTimeLeft(getTimeByMode(nextMode));
    setIsRunning(false);
  }

  function start() {
    setIsRunning(true);
  }

  function pause() {
    setIsRunning(false);
  }

  function reset() {
    setTimeLeft(getTimeByMode(mode));
    setIsRunning(false);
  }

  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          const nextMode = getNextMode(mode);
          switchMode(nextMode);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isRunning, mode]);

  const value = {
    mode,
    timeLeft,
    isRunning,
    start,
    pause,
    reset,
    switchMode,
  };

  return (
    <PomodoroContext.Provider value={value}>
      {children}
    </PomodoroContext.Provider>
  );
}

export function usePomodoro() {
  return useContext(PomodoroContext);
}
