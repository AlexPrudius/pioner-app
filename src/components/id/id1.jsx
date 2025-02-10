import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { objects } from "../data";
import { YMaps } from "@pbe/react-yandex-maps";

export default function ID1({ open, onClose }) {
  if (!open) return null;

  // Найдём объект с id = 1 из data.js
  const objectData = objects.find((item) => item.id === 1);

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h3>{objectData?.title}</h3>
        <p>{objectData?.description}</p>

        <YMaps>
          <iframe
            src={objectData?.map.src}
            width={objectData?.map.width}
            height={objectData?.map.height}
            frameBorder={objectData?.map.frameBorder}
            allowFullScreen={objectData?.map.allowFullScreen}
            style={objectData?.map.style}
            title="Map"
          ></iframe>
        </YMaps>

        <Link to="/pioner-app/">Home</Link>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
