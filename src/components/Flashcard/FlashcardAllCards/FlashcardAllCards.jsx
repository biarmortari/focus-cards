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
          <h2 className="flashcard-question">{card.question}</h2>
          <div className="flashcard__answer-wrapper">
            <p className="flashcard__answer-title">Answer:</p>
            <p className="flashcard__answer">{card.answer}</p>
          </div>

          <div className="flashcard__footer">
            <span className="flashcard__category">{card.category}</span>

            <ProgressBar value={card.knownCount} />

            <div className="flashcard__menu">
              <button
                aria-label="Open menu"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                ⋮
              </button>

              {isMenuOpen && (
                <div className="flashcard__dropdown">
                  <button
                    onClick={() => {
                      setIsEditOpen(true);
                      setIsMenuOpen(false);
                    }}
                  >
                    Edit
                  </button>

                  <button
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
        <Modal title="Edit your card" onClose={() => setIsEditOpen(false)}>
          <FlashcardForm initialData={card} onSubmit={handleEdit} />
        </Modal>
      )}

      {isDeleteOpen && (
        <Modal title="Delete this card?" onClose={() => setIsDeleteOpen(false)}>
          <p>This action can't be undone</p>

          <button onClick={() => setIsDeleteOpen(false)}>Cancel</button>
          <button onClick={handleDelete}>Delete Card</button>
        </Modal>
      )}
    </>
  );
}
