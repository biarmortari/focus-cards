import { useState, useContext } from "react";
import { FlashcardsContext } from "../../contexts/FlashcardsContext";

export function FlashcardForm() {
  const [data, setData] = useState({
    question: "",
    answer: "",
    category: "",
  });

  const { addFlashcard } = useContext(FlashcardsContext);

  function handleSubmit(event) {
    event.preventDefault();

    if (!data.question || !data.answer || !data.category) {
      return;
    }

    addFlashcard(data);

    setData({
      question: "",
      answer: "",
      category: "",
    });
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
        <p>Question</p>
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

        <p>Answer</p>
        <input
          id="answer"
          required
          name="answer"
          type="text"
          placeholder="e.g., What is the capital of France?"
          value={data.answer}
          onChange={handleChange}
          className="form__input"
        />
        <span className="form__input-error"></span>

        <p>Category</p>
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
          Create Card
        </button>
      </fieldset>
    </form>
  );
}
