import { useState } from "react";
import ModalFilm from "./Modal/ModalFilm";
import Button from "./Button/Button";

export default function FilmSection() {
  const [modal, setModal] = useState(false);

  return (
    <section>
      <Button onClick={() => setModal(true)}>Фильмы</Button>
      <ModalFilm open={modal} onClose={() => setModal(false)} />
    </section>
  );
}
