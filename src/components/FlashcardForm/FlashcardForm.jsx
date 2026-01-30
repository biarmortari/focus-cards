import { useState, useContext } from "react";
import { FlashcardsContext } from "../../contexts/FlashcardsContext";
import circle from "../../assets/images/icon-circle-plus.svg";
import error from "../../assets/images/icon-error.svg";
import "./FlashcardForm.css";

export function FlashcardForm({ initialData = {}, onSubmit }) {
  const [data, setData] = useState({
    question: initialData.question || "",
    answer: initialData.answer || "",
    category: initialData.category || "",
  });

  const [errors, setErrors] = useState({});

  const isEditing = Boolean(initialData?.id);
  const buttonLabel = isEditing ? "Save Changes" : "Create Card";

  const { addFlashcard } = useContext(FlashcardsContext);

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};

    if (!data.question.trim()) {
      newErrors.question = "Please enter a question.";
    }

    if (!data.answer.trim()) {
      newErrors.answer = "Please enter an answer.";
    }

    if (!data.category.trim()) {
      newErrors.category = "Please select a category.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(data);

    setErrors({});

    setData({
      question: "",
      answer: "",
      category: "",
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  }

  return (
    <form className="flashcard_form" onSubmit={handleSubmit} noValidate>
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

        {errors.question && (
          <span className="form__input-error">
            <img src={error} alt="" className="error-icon" />
            {errors.question}
          </span>
        )}

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

        {errors.answer && (
          <span className="form__input-error">
            <img src={error} alt="" className="error-icon" />
            {errors.answer}
          </span>
        )}

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

        {errors.category && (
          <span className="form__input-error">
            <img src={error} alt="" className="error-icon" />
            {errors.category}
          </span>
        )}

        <button type="submit" name="submit" className="form__button">
          <img src={circle} />
          {buttonLabel}
        </button>
      </fieldset>
    </form>
  );
}
