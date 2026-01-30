import { useState, useContext } from "react";
import { FlashcardsContext } from "../../contexts/FlashcardsContext";
import circle from "../../assets/images/icon-circle-plus.svg";
import "./FlashcardForm.css";

export function FlashcardForm({ initialData = {}, onSubmit }) {
  const [data, setData] = useState({
    question: initialData.question || "",
    answer: initialData.answer || "",
    category: initialData.category || "",
  });

  const isEditing = Boolean(initialData?.id);
  const buttonLabel = isEditing ? "Save Changes" : "Create Card";

  const { addFlashcard } = useContext(FlashcardsContext);

  function handleSubmit(event) {
    event.preventDefault();

    if (!data.question || !data.answer || !data.category) {
      return;
    }

    onSubmit(data);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <form className="flashcard_form" onSubmit={handleSubmit}>
      <fieldset className="form__fieldset">
        <p className="form__description">Question</p>
        <input
          id="question"
          required
          name="question"
          type="text"
          placeholder="e.g., What is the capital of France?"
          value={data.question}
          onChange={handleChange}
          className="form__input"
        />
        <span className="form__input-error"></span>

        <p className="form__description">Answer</p>
        <input
          id="answer"
          required
          name="answer"
          type="text"
          placeholder="e.g., What is the capital of France?"
          value={data.answer}
          onChange={handleChange}
          className="form__input form__input-answer"
        />
        <span className="form__input-error"></span>

        <p className="form__description">Category</p>
        <input
          id="category"
          name="category"
          type="text"
          placeholder="e.g., Geography"
          value={data.category}
          onChange={handleChange}
          className="form__input"
          required
        />
        <span className="form__input-error"></span>

        <button type="submit" name="submit" className="form__button">
          <img src={circle} />
          {buttonLabel}
        </button>
      </fieldset>
    </form>
  );
}
