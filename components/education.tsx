export default function EducationComponent() {
  return (
    <div
      id="education"
      className="uk-container uk-flex uk-flex-center uk-padding"
    >
      <h1 className="uk-text-center uk-margin-remove">My Education</h1>
      <hr className="divider" />
      <div className="uk-section uk-section-primary uk-preserve-color uk-padding-remove uk-container-small">
        <div className="uk-padding">
          <div
            className="uk-grid-match uk-child-width-1-1 educationContent"
            uk-grid
          >
            <div className="contentBox">
              <div className="uk-card uk-card-default uk-card-body">
                <h4 className="uk-text-left uk-margin-remove">
                  Honours Bachelor of Science in Computer Science
                </h4>
                <p className="uk-margin-remove">
                  <strong className="uk-text-left">University of Ottawa</strong>
                  <span className="rightFloat">September 2021 - current</span>
                </p>
                {/* <h6 className="uk-text-left grade">CGPA not available yet</h6>*/}
                <p className="uk-text-small">
                  Currently enrolled in BSc Computer Science at University of
                  Ottawa.
                </p>
              </div>
            </div>
            <div className="contentBox">
              <div className="uk-card uk-card-default uk-card-body">
                <h4 className="uk-text-left uk-margin-remove">
                  Computer Programming Diploma
                </h4>
                <p className="uk-margin-remove">
                  <strong className="uk-text-left">Georgian College</strong>
                  <span className="rightFloat">
                    January 2016 - December 2017
                  </span>
                </p>
                <h6 className="uk-text-left grade">Overall CGPA 4.0</h6>
                <p className="uk-text-small">
                  This program helped me build the most relevant and popular
                  skills of the software and web development industry. As I
                  progressed through the two years, the courses I took helped me
                  gain insight and experience in the field of software and web
                  development, systems analysis as well as project management.
                </p>
              </div>
            </div>
            <div className="contentBox">
              <div className="uk-card uk-card-default uk-card-body">
                <h4 className="uk-text-left uk-margin-remove">High School</h4>
                <p className="uk-margin-remove">
                  <strong className="uk-text-left">
                    Om Parkash Bansal Modern School
                  </strong>
                  <span className="rightFloat">1999 - 2015</span>
                </p>
                <h6 className="uk-text-left grade">
                  Final High School grade: 92.2%
                </h6>
                <p className="uk-text-small">
                  Studied Multimedia & Application development, Economics,
                  Accountancy and Business Management in high school.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
