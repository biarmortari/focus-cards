import { Flashcard } from "../Flashcard";
import { ProgressBar } from "../../ProgressBar/ProgressBar";
import { Modal } from "../../Modal/Modal";
import { FlashcardForm } from "../../FlashcardForm/FlashcardForm";
import { FlashcardsContext } from "../../../contexts/FlashcardsContext";
import { useContext, useState } from "react";
import "./FlashcardAllCards.css";

export function FlashcardAllCards({ card }) {
  const { deleteFlashcard, editFlashcard } = useContext(FlashcardsContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  function handleEdit(updatedData) {
    editFlashcard(card.id, updatedData);
    setIsEditOpen(false);
  }

  function handleDelete() {
    deleteFlashcard(card.id);
    setIsDeleteOpen(false);
  }

  return (
    <>
      <Flashcard card={card}>
        <div className="flashcard__content">
          <h2 className="flashcard__question">{card.question}</h2>
          <div className="flashcard__answer-wrapper">
            <p className="flashcard__answer-title">Answer:</p>
            <p className="flashcard__answer">{card.answer}</p>
          </div>

          <div className="flashcard__footer">
            <span className="flashcard__category">{card.category}</span>

            <ProgressBar value={card.knownCount} />

            <div className="flashcard__menu">
              <button
                className="flashcard-open__menu"
                aria-label="Open menu"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                ⋮
              </button>

              {isMenuOpen && (
                <div className="flashcard__dropdown">
                  <button
                    className="dropdown__item"
                    onClick={() => {
                      setIsEditOpen(true);
                      setIsMenuOpen(false);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="dropdown__item"
                    onClick={() => {
                      setIsDeleteOpen(true);
                      setIsMenuOpen(false);
                    }}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Flashcard>
      {isEditOpen && (
        <Modal
          title="Edit your card"
          onClose={() => setIsEditOpen(false)}
          className="modal__form"
        >
          <FlashcardForm initialData={card} onSubmit={handleEdit} />
        </Modal>
      )}

      {isDeleteOpen && (
        <Modal title="Delete this card?" onClose={() => setIsDeleteOpen(false)}>
          <p className="delete-card__text">This action can't be undone</p>
          <div className="delete-card__buttons">
            <button
              className="cancel__button"
              onClick={() => setIsDeleteOpen(false)}
            >
              Cancel
            </button>
            <button className="delete__button" onClick={handleDelete}>
              Delete Card
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
