export default function SoftwareDevelopmentSkills() {
  return (
    <li className="skillContent uk-card uk-card-default uk-card-body">
      <a className="uk-accordion-title" href="#">
        Software Development
      </a>
      <div className="uk-accordion-content">
        <p>Experience with all stages of Software Development Life Cycle</p>
        <div id="skills-soft-dev-cycle">
          <div
            className="uk-child-width-1-3@m uk-grid-small uk-grid-match"
            uk-grid="true"
          >
            <div>
              <div className="uk-card uk-card-default uk-card-body">
                <h4 className="uk-card-title">Pre-Development</h4>
                <p>
                  Ideation, User Stories, Requirements Gathering, Market
                  Validation
                </p>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-primary uk-card-body">
                <h4 className="uk-card-title">Development</h4>
                <p>
                  Project Setup, Mockups, Functional Prototypes, UI/UX Strategy,
                  Data Strategy, App Architecture
                </p>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-secondary uk-card-body">
                <h4 className="uk-card-title">Post-Development</h4>
                <p>
                  Cloud Deployment, CI/CD Pipelines, Logging & Monitoring,
                  Analytics, Continued Optimization
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
