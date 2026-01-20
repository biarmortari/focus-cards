import { Link } from "react-router-dom";
import "./Home.css";
import logo from "../../assets/images/logo-small.svg";

export function Home() {
  return (
    <main className="home">
      <div className="title_wrapper">
        <img src={logo} className="title_logo" />
        <h1 className="title">Focus Cards</h1>
      </div>
      <h2>
        Organize seus estudos com flashcards e gerencie seu tempo com Pomodoro
      </h2>
      <div>
        <p>Conselho do dia</p>
      </div>
      <div>
        <Link to="study">
          <button>Começar a estudar</button>
        </Link>
      </div>
    </main>
  );
}
