import { createPortal } from "react-dom";

export default function ModalProject({ open, onClose }) {
  if (!open) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <h3>О проекте </h3>
        <hr
          role="separator"
          aria-orientation="horizontal"
          className="v-divider theme--light"
        ></hr>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis quod
          fuga ea saepe aperiam odit laboriosam quasi ipsa nihil. Beatae
          praesentium enim velit similique accusantium in veritatis quisquam,
          cumque vero.
        </p>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
