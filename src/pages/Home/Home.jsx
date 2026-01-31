import { useEffect, useState } from "react";
import { getRandomAdvice } from "../../services/adviceApi";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from "../../assets/images/logo-small.svg";

export function Home() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchAdvice() {
    try {
      setLoading(true);
      const adviceText = await getRandomAdvice();
      setAdvice(adviceText);
    } catch (err) {
      setError("Could not load advice. Try again later.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <main className="home-hero">
      <div className="title_wrapper">
        <img src={logo} className="title_logo" />
        <h1 className="title">Focus Cards</h1>
      </div>
      <h2 className="subtitle">
        Organize seus estudos com Flashcards e gerencie seu tempo com Pomodoro
      </h2>
      <div className="advice-card">
        <p>Conselho do dia</p>
        <div className="advice-text">
          {loading && <p>Loading advice...</p>}

          {error && <p className="error">{error}</p>}

          {!loading && !error && (
            <blockquote className="advice">“{advice}”</blockquote>
          )}
        </div>
        <button onClick={fetchAdvice} className="advice-refresh-btn">
          New advice
        </button>
      </div>
      <div>
        <Link to="study">
          <button className="start-study-btn">Começar a estudar</button>
        </Link>
      </div>
    </main>
  );
}
