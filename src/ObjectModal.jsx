// components/ObjectModal.jsx
import React from "react";
import { createPortal } from "react-dom";
import { useParams, useNavigate } from "react-router-dom";
import { objects } from "./components/data";

export default function ObjectModal() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Ищем объект по id (приводим id к строке для сравнения)
  const objectData = objects.find((item) => String(item.id) === id);

  if (!objectData) {
    // Если объект не найден, можно вернуть null или перенаправить
    return null;
  }

  const handleClose = () => {
    navigate("/pioner-app");
  };

  return createPortal(
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={handleClose}>
          ✖
        </button>
        <h3>{objectData.title}</h3>

        {/* Отображаем карту */}
        <div className="modal-map">
          {/* Используем dangerouslySetInnerHTML, чтобы отобразить HTML-строку */}
          <div dangerouslySetInnerHTML={{ __html: objectData.mapUrl }} />
        </div>

        {/* Описание */}
        <p>{objectData.description}</p>

        {/* Изображения */}
        {objectData.images &&
          objectData.images.map((image, index) => (
            <div key={index} className="modal-image">
              <img src={image.url} alt={`Image ${index + 1}`} />
              {image.source && (
                <p>
                  Source:{" "}
                  <a
                    href={image.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {image.source}
                  </a>
                </p>
              )}
            </div>
          ))}

        {/* Комментарии */}
        {objectData.comments &&
          objectData.comments.map((comment, index) => (
            <div key={index} className="modal-comment">
              <p>{comment.text}</p>
              {/* Автор может содержать HTML-ссылку */}
              <p dangerouslySetInnerHTML={{ __html: comment.author }} />
            </div>
          ))}
      </div>
    </div>,
    document.getElementById("modal")
  );
}
