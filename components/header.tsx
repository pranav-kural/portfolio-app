export default function HeaderComponent() {
  return (
    <header>
      <h1 className="uk-heading-line uk-text-center uk-margin-top">
        <span className="uk-text-uppercase titleText">Pranav • Kural</span>
      </h1>
      <div
        id="navbar-container"
        uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky uk-navbar-half-transparent"
      >
        <nav
          id="navbar-desktop"
          className="uk-navbar-container"
          uk-navbar="true"
        >
          <div className="uk-navbar-center">
            <ul className="uk-navbar-nav">
              <li>
                <a data-scroll href="#about" data-uk-smooth-scroll>
                  About
                </a>
              </li>
              <li>
                <a data-scroll href="#education" data-uk-smooth-scroll>
                  Education
                </a>
              </li>
              <li>
                <a data-scroll href="#career" data-uk-smooth-scroll>
                  Career
                </a>
              </li>
              <li>
                <a data-scroll href="#skills" data-uk-smooth-scroll>
                  Skills
                </a>
              </li>
              <li>
                <a data-scroll href="#projects" data-uk-smooth-scroll>
                  Projects
                </a>
              </li>
              <li>
                <a data-scroll href="#contact" data-uk-smooth-scroll>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <nav
          id="navbar-mobile"
          className="uk-navbar uk-navbar-container uk-margin uk-navbar-half-transparent"
          uk-navbar="true"
        >
          <div className="uk-navbar-center">
            <a
              className="uk-navbar-toggle uk-navbar-toggle-animate"
              uk-navbar-toggle-icon="true"
              href="#"
            ></a>
            <div className="uk-navbar-dropdown">
              <ul className="uk-nav uk-navbar-dropdown-nav">
                <li className="uk-active">
                  <a data-scroll href="#about" data-uk-smooth-scroll>
                    About
                  </a>
                </li>
                <li>
                  <a data-scroll href="#education" data-uk-smooth-scroll>
                    Education
                  </a>
                </li>
                <li>
                  <a data-scroll href="#career" data-uk-smooth-scroll>
                    Career
                  </a>
                </li>
                <li>
                  <a data-scroll href="#skills" data-uk-smooth-scroll>
                    Skills
                  </a>
                </li>
                <li>
                  <a data-scroll href="#projects" data-uk-smooth-scroll>
                    Projects
                  </a>
                </li>
                <li>
                  <a data-scroll href="#contact" data-uk-smooth-scroll>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <hr className="uk-divider-icon uk-margin-remove" />
    </header>
  );
}
