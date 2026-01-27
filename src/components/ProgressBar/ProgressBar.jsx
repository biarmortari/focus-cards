import "./ProgressBar.css";

export function ProgressBar({ value }) {
  const max = 5;
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="progress">
      <div className="progress__bar">
        <div className="progress__fill" style={{ width: `${percentage}%` }} />
      </div>

      <span className="progress__text">
        {value} / {max}
      </span>
    </div>
  );
}
