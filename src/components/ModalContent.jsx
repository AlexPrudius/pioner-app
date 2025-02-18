import { createPortal } from "react-dom";
import { useParams, Link } from "react-router-dom";
import { objects } from "./data";
import { YMaps } from "@pbe/react-yandex-maps";

export default function ModalContent({ open, onClose }) {
  const { id } = useParams(); // извлекаем id из URL
  const objectData = objects.find((item) => String(item.id) === id);

  if (!open) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h3>{objectData?.title}</h3>
        <p>{objectData?.description}</p>
        {objectData?.map && (
          <YMaps>
            <iframe
              src={objectData.map.src}
              width={objectData.map.width}
              height={objectData.map.height}
              frameBorder={objectData.map.frameBorder}
              allowFullScreen={objectData.map.allowFullScreen}
              style={objectData.map.style}
              title="Map"
            ></iframe>
          </YMaps>
        )}

        {/* Вывод фотографий */}
        {objectData?.images && objectData.images.length > 0 && (
          <div className="modal-images">
            {objectData.images.map((img, index) => (
              <div key={index} className="modal-image">
                <img src={img.url} alt={`Image ${index + 1}`} />
                {img.source && (
                  <p>
                    Source:{" "}
                    <a
                      href={img.source}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {img.source}
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Вывод комментариев */}
        {objectData?.comments && objectData.comments.length > 0 && (
          <div className="modal-comments">
            {objectData.comments.map((comment, index) => (
              <div key={index} className="modal-comment">
                <p>{comment.text}</p>
                {/* Автор может содержать HTML, поэтому используем dangerouslySetInnerHTML */}
                <p dangerouslySetInnerHTML={{ __html: comment.author }} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>,
    document.getElementById("modal")
  );
}
