export function FlashcardForm() {
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

        <button type="submit" name="submit" className="form__button">
          Create Card
        </button>
      </fieldset>
    </form>
  );
}
