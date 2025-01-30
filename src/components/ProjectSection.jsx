import { useState } from "react";
import ModalProject from "./Modal/ModalProject";
import Button from "./Button/Button";

export default function EffectSection() {
  const [modal, setModal] = useState(false);

  return (
    <section>
      <Button onClick={() => setModal(true)}>О проекте</Button>
      <ModalProject open={modal} onClose={() => setModal(false)} />
    </section>
  );
}
