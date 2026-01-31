import { useContext } from "react";
import { FlashcardsContext } from "../../contexts/FlashcardsContext";
import "./Stats.css";

import iconTotal from "../../assets/images/icon-stats-total.svg";
import iconMastered from "../../assets/images/icon-stats-mastered.svg";
import iconProgress from "../../assets/images/icon-stats-in-progress.svg";
import iconNotStarted from "../../assets/images/icon-stats-not-started.svg";

export function Stats() {
  const { stats } = useContext(FlashcardsContext);
  const statItems = [
    {
      label: "Total Cards",
      value: stats.total,
      color: "#92adeb",
      icon: iconTotal,
    },
    {
      label: "Mastered",
      value: stats.mastered,
      color: "#4cd9c0",
      icon: iconMastered,
    },
    {
      label: "In Progress",
      value: stats.inProgress,
      color: "#fc8ae5",
      icon: iconProgress,
    },
    {
      label: "Not Started",
      value: stats.notStarted,
      color: "#f8b4d9",
      icon: iconNotStarted,
    },
  ];

  return (
    <div className="stats-wrapper">
      <h3 className="stats-title">Study Statistics</h3>
      <ul className="stats-list">
        {statItems.map((item, index) => (
          <li key={index} className="stat-item">
            <div className="stat-info">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
            <div className="stat-icon" style={{ backgroundColor: item.color }}>
              <img src={item.icon} alt={item.label} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
