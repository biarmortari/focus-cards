import { Routes, Route } from "react-router-dom";

import { Home } from "../src/pages/Home";
import { Flashcards } from "../src/pages/Flashcards";
import { Header } from "../src/components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study" element={<Flashcards />} />
      </Routes>
    </>
  );
}

export default App;
