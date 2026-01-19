import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-small.svg";

export function Home() {
  return (
    <main>
      <div>
        <img src={logo} />
        <h1>Focus Cards</h1>
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
