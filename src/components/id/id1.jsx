import { createPortal } from "react-dom";
import { YMaps } from "@pbe/react-yandex-maps";

export default function id1({ open, onClose }) {
  if (!open) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h3>Значимые места Пионерного</h3>
        <YMaps>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Acc8f3d426f6ba3909ca88d94a2ef72ad5d9fbcbac28514f958372dfa979af6ad&amp;source=constructor"
            width="100%"
            height="800px"
            frameborder="0"
          ></iframe>
        </YMaps>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
