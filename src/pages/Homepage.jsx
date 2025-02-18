import EffectSection from "../components/Section/MapSection.jsx";
import ProjectSection from "../components/Section/ProjectSection.jsx";
import FilmSection from "../components/Section/FilmSection.jsx";
import Background from "../components/Background.jsx";

export default function HomePage() {
  return (
    <div>
      <div className="button-section">
        <ProjectSection></ProjectSection>
        <EffectSection></EffectSection>
        <FilmSection></FilmSection>
      </div>
      <Background></Background>
    </div>
  );
}
