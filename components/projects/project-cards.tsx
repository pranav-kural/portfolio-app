import Image from "next/image";
import { ProjectsContainer, ProjectObj } from "./project-type";

export default function ProjectCards({ projects }: ProjectsContainer) {
  return (
    <div className="project-cards-container">
      {projects.map((project: ProjectObj) => (
        <div
          className="uk-card uk-card-default uk-card-body project-cards"
          uk-scrollspy="cls:uk-animation-fade"
          key={project.name}
        >
          <div className="uk-card-media-top">
            <Image
              src={`/assets/images/project_screenshots/${project.screenshot}`}
              width={550}
              height={300}
              alt={`screenshot for project ${project.name}`}
              className="project-screenshot"
            />
          </div>
          <div className="uk-card-body">
            <div className="uk-card-title">{project.name}</div>
            <p>{project.description}</p>
            <p className="sub-categories">
              {project.languages.map((lang) => (
                <span key={lang}>{lang}</span>
              ))}
            </p>
          </div>
          <div className="uk-card-footer">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={project.repo_url}
              className="uk-button gitBtn uk-button-small"
            >
              <span>
                <i className="fa fa-github" aria-hidden="true"></i> Repo
              </span>
            </a>
            {project.site_url ? (
              <a
                target="_blank"
                rel="noreferrer noopener"
                href={project.site_url}
                className="uk-button siteBtn uk-button-small"
              >
                <span>
                  <i className="fa fa-globe" aria-hidden="true"></i>
                  Site
                </span>
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
