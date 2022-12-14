import projectsData from "../data/projects.json";
import ProjectCards from "./projects/project-cards";

export default function Projects() {
  return (
    <div
      id="projects"
      className="uk-container uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-padding"
    >
      <h1 className="uk-text-center uk-margin-remove">Highlighted Projects</h1>
      <hr className="divider-large" />
      <div className="uk-section uk-section-danger uk-preserve-color uk-container-small uk-flex uk-flex-column uk-flex-center uk-flex-middle">
        <div className="projects-container">
          <ProjectCards projects={projectsData} />
        </div>
        <div className="github-projects-btn">
          <a
            className="uk-button uk-button-primary uk-button-large"
            href="https://github.com/pranav-kural"
            target="_blank"
            rel="noreferrer noopener"
          >
            View more on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
