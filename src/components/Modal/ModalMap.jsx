import { createPortal } from "react-dom";
import MapComponent from "../MapComponent";

export default function ModalMap({ open, onClose }) {
  if (!open) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h3>Карта</h3>
        <MapComponent />
      </div>
    </div>,
    document.getElementById("modal")
  );
}
