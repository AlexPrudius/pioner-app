import "antd/dist/reset.css";

export default function Button({ children, onClick }) {
  //function handleMouseEnter() {}

  return (
    <button
      className="button active"
      onClick={onClick}
      //onDoubleClick={() => console.log("doubleclick")} // пример без создания отдельной функции
      //onMouseEnter={handleMouseEnter} //наведение на кнопку
    >
      {children}
    </button>
  );
}
