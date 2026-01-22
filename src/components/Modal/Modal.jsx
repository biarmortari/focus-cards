import { useEffect } from "react";
import { createPortal } from "react-dom";

export function Modal({ title, children, onClose }) {
  useEffect(() => {
    function handleEsc(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return createPortal(
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal__close"
          aria-label="Close modal"
          onClick={onClose}
        >
          ×
        </button>

        {title && <h3 className="modal__title">{title}</h3>}

        {children}
      </div>
    </div>,
    document.getElementById("modal-root"),
  );
}
