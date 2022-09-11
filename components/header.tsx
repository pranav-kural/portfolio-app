export default function HeaderComponent() {
  return (
    <header>
      <h1 className="uk-heading-line uk-text-center uk-margin-top">
        <span className="uk-text-uppercase">Pranav • Kural</span>
      </h1>
      <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky uk-navbar-transparent">
        <nav className="uk-navbar-container" uk-navbar>
          <div className="uk-navbar-center">
            <ul className="uk-navbar-nav">
              <li>
                <a data-scroll href="#aboutMe" data-uk-smooth-scroll>
                  About Me
                </a>
              </li>
              <li>
                <a data-scroll href="#education" data-uk-smooth-scroll>
                  Education
                </a>
              </li>
              <li>
                <a data-scroll href="#workexperience" data-uk-smooth-scroll>
                  Work Experience
                </a>
              </li>
              <li>
                <a data-scroll href="#myWork" data-uk-smooth-scroll>
                  Projects
                </a>
              </li>
              <li>
                <a data-scroll href="#mySkills" data-uk-smooth-scroll>
                  Skills
                </a>
              </li>
              <li>
                <a data-scroll href="#contactMe" data-uk-smooth-scroll>
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <hr className="uk-divider-icon uk-margin-remove" />
    </header>
  );
}
