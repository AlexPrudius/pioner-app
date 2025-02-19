import EffectSection from "../components/Section/MapSection.jsx";
import ProjectSection from "../components/Section/ProjectSection.jsx";
import FilmSection from "../components/Section/FilmSection.jsx";

export default function HomePage() {
  return (
    <div className="button-section">
      <ProjectSection></ProjectSection>
      <EffectSection></EffectSection>
      <FilmSection></FilmSection>
    </div>
  );
}
