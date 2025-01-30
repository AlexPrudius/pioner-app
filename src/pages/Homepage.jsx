import EffectSection from "../components/EffectSection.jsx";
import ProjectSection from "../components/ProjectSection.jsx";
import FilmSection from "../components/FilmSection.jsx";
import Background from "../components/Background.jsx";

export default function Homepage() {
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
