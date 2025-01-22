export default function Header() {
  const now = new Date();

  return (
    <header>
      <span>Сейчас будет время: {now.toLocaleTimeString()}</span>
    </header>
  );
}
