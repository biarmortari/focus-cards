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
    <main className="home__container">
      <div className="home__header">
        <img src={logo} className="home__logo" alt="Focus Cards Logo" />
        <h1 className="home__brand">Focus Cards</h1>
      </div>

      <h2 className="home__subtitle">
        Organize your studies with <span className="text-pink">Flashcards</span>{" "}
        and manage your time with <span className="text-yellow">Pomodoro</span>
      </h2>

      <div className="advice__card">
        <span className="advice__badge">Daily Advice</span>

        <div className="advice__content">
          {loading && <p className="loading__text">Loading advice...</p>}
          {error && <p className="error__text">{error}</p>}
          {!loading && !error && (
            <blockquote className="advice__quote">“{advice}”</blockquote>
          )}
        </div>

        <button onClick={fetchAdvice} className="advice__refresh-btn">
          New advice
        </button>
      </div>

      <Link to="study" className="start__link">
        <button className="start__study-btn">Start studying &#8594;</button>
      </Link>
    </main>
  );
}
