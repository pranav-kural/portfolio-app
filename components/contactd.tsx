export default function ContactD() {
  return (
    <nav className="uk-navbar uk-navbar-container uk-margin" uk-navbar="true">
      <div className="uk-navbar-left">
        <a
          className="uk-navbar-toggle uk-navbar-toggle-animate"
          uk-navbar-toggle-icon="true"
        ></a>
        <div className="uk-navbar-dropdown">
          <ul className="uk-nav uk-navbar-dropdown-nav">
            <li className="uk-active">
              <a href="#">Active</a>
            </li>
            <li>
              <a href="#">Item</a>
            </li>
            <li>
              <a href="#">Item</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
