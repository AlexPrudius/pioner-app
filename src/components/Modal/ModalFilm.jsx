import { createPortal } from "react-dom";

export default function ModalFilm({ open, onClose }) {
  if (!open) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <h3>Фильмы</h3>
        <hr
          role="separator"
          aria-orientation="horizontal"
          class="v-divider theme--light"
        ></hr>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/KtmIduhWIwQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
        ></iframe>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/hcGY_T-i16c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
        ></iframe>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
