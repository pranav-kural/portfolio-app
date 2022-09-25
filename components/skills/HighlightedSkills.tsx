export default function HighlightedSkills() {
  return (
    <li className="skillContent uk-card uk-card-default uk-card-body">
      <a className="uk-accordion-title" href="#">
        Highlighted Skills
      </a>
      <div className="uk-accordion-content">
        <div className="skills-cards-container">
          <div
            className="uk-child-width-1-3@m uk-grid-small uk-grid-match"
            uk-grid="true"
          >
            <div>
              <div className="uk-card uk-card-default uk-card-body">
                <h4 className="uk-card-title">Advance</h4>
                <ul className="uk-list uk-list-divider skills-card-item">
                  <li>JavaScript, ES6</li>
                  <li>
                    Web Development (React & NextJS, Functional Prototype
                    Development, Component-Based Development)
                  </li>
                  <li>
                    Application State Management (Redux, Reducers,
                    Context-Provider Pattern)
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-primary uk-card-body">
                <h4 className="uk-card-title">Intermediate</h4>
                <ul className="uk-list uk-list-divider skills-card-item">
                  <li>TypeScript, Python, Java</li>
                  <li>
                    CSS, SASS, REST APIs, External API Integration,
                    Authentication (third-party, JSON Web Tokens)
                  </li>
                  <li>Firebase, Flutter, MongoDB, MySQL, Material-UI</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-secondary uk-card-body">
                <h4 className="uk-card-title">Beginner</h4>
                <ul className="uk-list uk-list-divider skills-card-item">
                  <li>C#, C++, Dart</li>
                  <li>
                    Cross-platform app development, Android App Dev, Web 3.0,
                    Data Analysis, Data Visualization (Tableau)
                  </li>
                  <li>WordPress, Shopify Storefront API, GraphQL</li>
                  <li>Operating System, Computer Architecture, AI/ML</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
