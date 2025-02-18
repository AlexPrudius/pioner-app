import { useState } from "react";
import ModalMap from "../Modal/ModalMap";
import Button from "../Button/Button";

export default function EffectSection() {
  const [modal, setModal] = useState(false);

  return (
    <section>
      <Button onClick={() => setModal(true)}>Карта</Button>
      <ModalMap open={modal} onClose={() => setModal(false)} />
    </section>
  );
}
