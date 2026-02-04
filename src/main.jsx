import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App";

import { FlashcardsProvider } from "../src/contexts/FlashcardsContext";
import { PomodoroContext, PomodoroProvider } from "./contexts/PomodoroContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PomodoroProvider>
      <FlashcardsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FlashcardsProvider>
    </PomodoroProvider>
  </StrictMode>,
);
z;
