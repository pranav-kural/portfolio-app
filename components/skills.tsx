import SoftwareDevelopmentSkills from "./skills/SoftwareDevelopmentSkills";
import TechnicalSkills from "./skills/TechnicalSkills";

export default function SkillsComponent() {
  return (
    <div
      id="skills"
      className="uk-container uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-padding"
    >
      <h1 className="uk-text-center uk-margin-remove">My Skills</h1>
      <hr className="divider-large" />
      <div
        id="skillsContainer"
        className="uk-section uk-section-danger uk-preserve-color uk-container-small uk-flex uk-flex-column uk-flex-center uk-flex-middle"
      >
        <ul uk-accordion="multiple: true">
          <li className="uk-open skillContent uk-card uk-card-default uk-card-body">
            <a className="uk-accordion-title" href="#">
              Highlighted Skills
            </a>
            <div className="uk-accordion-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </li>
          <TechnicalSkills />
          <SoftwareDevelopmentSkills />
          <li className="skillContent uk-card uk-card-default uk-card-body">
            <a className="uk-accordion-title" href="#">
              Other Skills
            </a>
            <div className="uk-accordion-content">
              <ul className="uk-list uk-list-divider">
                <li>Critical Thinking & Analytical Mindset 👨🏽‍💻</li>
                <li>Excellent Collaboration and Team Working Skills 👬</li>
                <li>Adept at Time and Workload Management ⏳</li>
                <li>Harmonious, Respectful & Approachable Attitude 🙏</li>
                <li>Adaptability and Fast Learner 🤓</li>
                <li>Kickboxing, Yoga, Cooking 🍱</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
