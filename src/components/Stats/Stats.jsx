import { useContext } from "react";
import { FlashcardsContext } from "../../contexts/FlashcardsContext";

export function Stats() {
  const { stats } = useContext(FlashcardsContext);

  return (
    <div>
      <h3>Study Statistics</h3>
      <ul>
        <li>
          <span>Total cards</span>
          <strong>{stats.total}</strong>
        </li>

        <li>
          <span>Mastered</span>
          <strong>{stats.mastered}</strong>
        </li>

        <li>
          <span>In progress</span>
          <strong>{stats.inProgress}</strong>
        </li>

        <li>
          <span>Not started</span>
          <strong>{stats.notStarted}</strong>
        </li>
      </ul>
    </div>
  );
}
