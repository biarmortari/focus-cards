import { useContext } from "react";
import { FlashcardsContext } from "../../contexts/FlashcardsContext";
import { FlashcardFilter } from "../FlashcardFilter/FlashcardFilter";
import shuffle from "../../assets/images/icon-shuffle.svg";
import "./FlashcardControls.css";

export function FlashcardControls() {
  const { hideMastered, setHideMastered } = useContext(FlashcardsContext);
  const { isShuffled, setIsShuffled } = useContext(FlashcardsContext);
  return (
    <div className="control-buttons__wrapper">
      <div className="control-buttons-left">
        <FlashcardFilter />
        <label className="control-button control-button--hide-mastered">
          <input
            className="control-button__input"
            type="checkbox"
            checked={hideMastered}
            onChange={() => setHideMastered((prev) => !prev)}
          />
          Hide Mastered
        </label>
      </div>

      <button
        className="control-buttons control-button--shuffle"
        onClick={() => setIsShuffled((prev) => !prev)}
      >
        <img src={shuffle} />
        {isShuffled ? "Unshuffle" : "Shuffle"}
      </button>
    </div>
  );
}
