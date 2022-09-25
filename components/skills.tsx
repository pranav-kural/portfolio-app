import TechnicalSkillsPieChart from "./skills/technical_skills_pie_chart";

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
          <li className="skillContent uk-card uk-card-default uk-card-body">
            <a className="uk-accordion-title" href="#">
              Languages & Frameworks
            </a>
            <div className="uk-accordion-content">
              <TechnicalSkillsPieChart />
            </div>
          </li>
          <li className="skillContent uk-card uk-card-default uk-card-body">
            <a className="uk-accordion-title" href="#">
              Software Development
            </a>
            <div className="uk-accordion-content">
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat proident.
              </p>
            </div>
          </li>
          <li className="skillContent uk-card uk-card-default uk-card-body">
            <a className="uk-accordion-title" href="#">
              Other Technical Skills
            </a>
            <div className="uk-accordion-content">
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat proident.
              </p>
            </div>
          </li>
          <li className="skillContent uk-card uk-card-default uk-card-body">
            <a className="uk-accordion-title" href="#">
              Other Skills
            </a>
            <div className="uk-accordion-content">
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat proident.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
