import { Routes, Route } from "react-router-dom";

import { Home } from "../src/pages/Home/Home";
import { Flashcards } from "./pages/Flashcards/Flashcards";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study" element={<Flashcards />} />
      </Routes>
    </>
  );
}

export default App;
