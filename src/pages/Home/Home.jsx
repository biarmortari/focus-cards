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
    <main className="home-container">
      <div className="home-header">
        <img src={logo} className="home-logo" alt="Focus Cards Logo" />
        <h1 className="home-brand">Focus Cards</h1>
      </div>

      <h2 className="home-subtitle">
        Organize your studies with <span className="text-pink">Flashcards</span>{" "}
        and manage your time with <span className="text-yellow">Pomodoro</span>
      </h2>

      <div className="advice-card">
        <span className="advice-badge">Advice of the day</span>

        <div className="advice-content">
          {loading && <p className="loading-text">Loading advice...</p>}
          {error && <p className="error-text">{error}</p>}
          {!loading && !error && (
            <blockquote className="advice-quote">“{advice}”</blockquote>
          )}
        </div>

        <button onClick={fetchAdvice} className="advice-refresh-btn">
          New advice
        </button>
      </div>

      <Link to="study" className="start-link">
        <button className="start-study-btn">Start studying &#8594;</button>
      </Link>
    </main>
  );
}
