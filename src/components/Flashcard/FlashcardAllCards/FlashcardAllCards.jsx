import { Flashcard } from "../Flashcard";
import { ProgressBar } from "../../ProgressBar/ProgressBar";
import { FlashcardsContext } from "../../../contexts/FlashcardsContext";
import { useContext, useState } from "react";

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
          <p className="flashcard__answer-title">Answer:</p>
          <p className="flashcard__answer">{card.answer}</p>

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
        <Modal onClose={() => setIsEditOpen(false)}>
          <FlashcardForm initialData={card} onSubmit={handleEdit} />
        </Modal>
      )}
      {isDeleteOpen && (
        <Modal onClose={() => setIsDeleteOpen(false)}>
          <p>Are you sure you want to delete this card?</p>

          <div className="modal__actions">
            <button onClick={handleDelete}>Yes, delete</button>
            <button onClick={() => setIsDeleteOpen(false)}>Cancel</button>
          </div>
        </Modal>
      )}
    </>
  );
}
