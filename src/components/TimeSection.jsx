import { useState } from "react";

export default function TimeSection() {
  const [now, setNow] = useState(new Date());

  setInterval(() => setNow(new Date()), 1000);

  return (
    <section>
      <span>Время: {now.toLocaleTimeString()}</span>
    </section>
  );
}
