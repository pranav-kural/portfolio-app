export default function CareerComponent() {
  return (
    <div id="career" className="uk-container uk-flex uk-flex-center uk-padding">
      <h1 className="uk-text-center uk-margin-remove">My Work Experience</h1>
      <hr className="divider-large" />
      <div className="uk-section uk-section-danger uk-preserve-color uk-padding-remove uk-container-small">
        <div className="uk-padding">
          <div
            className="careerContent uk-grid-match uk-child-width-1-1"
            uk-grid
          >
            <div className="contentBox">
              <div className="uk-card uk-card-default uk-card-body">
                <h4 className="uk-text-left uk-margin-remove">
                  IT Operations Analyst
                </h4>
                <p className="uk-margin-remove subtitle">
                  <strong>BMO Bank of Montreal</strong>
                  <span>January 2018 - August 2021</span>
                </p>
                <div className="uk-text-small">
                  I was rehired on the position of IT Operation Analyst after my
                  co-op work term ended at the Bank of Montreal’s primary Data
                  Centre in Barrie. I work primarily in the Applications Support
                  Team in the Operations Control Center. My responsibilities
                  included:
                  <br />
                  <ul>
                    <li>
                      Provide Tier I and II level support for triaging and
                      initiating incident resolution for major systems and
                      applications related issues affecting the bank on a medium
                      to large scale
                    </li>
                    <li>
                      Monitor performance and availability of systems,
                      applications and links to ensure full bank functionality
                      across North America
                    </li>
                    <li>
                      Performing initial investigation for any production batch
                      failures through the SDSF, ISPF, InfoPac and server log
                      analysis
                    </li>
                    <li>
                      Assisting in gathering and coordination of proper
                      technical resources in an event of a production issue and
                      ensuring batch/report SLAs are being met
                    </li>
                    <li>
                      Participating as a Mainframe Applications Analyst in
                      enterprise-wide Disaster Recovery exercises and IPLs
                    </li>
                  </ul>
                  <br />
                </div>
              </div>
            </div>

            <div className="contentBox">
              <div className="uk-card uk-card-default uk-card-body">
                <h4 className="uk-text-left uk-margin-remove">
                  IT Operations Analyst Co-op
                </h4>
                <p className="uk-margin-remove subtitle">
                  <strong>BMO Bank of Montreal</strong>
                  <span>September 2017 - December 2017</span>
                </p>
                <div className="uk-text-small">
                  I completed a 4 month co-op work term at Bank of Montreal’s
                  Data Centre in Barrie as an IT Operations Analyst. My core
                  responsibilities included:
                  <br />
                  <ul>
                    <li>
                      Monitor availability and performance of hardware, systems,
                      applications and links to ensure system and application
                      service level availability objectives are met or exceeded
                    </li>
                    <li>
                      Executes real time recovery actions to resolve critical
                      issues that impact established service levels
                    </li>
                    <li>
                      Actively monitor the banks mainframe environments and
                      systems messages for any issues or messages which require
                      operator responses
                    </li>
                  </ul>
                  <br />
                </div>
              </div>
            </div>

            <div className="contentBox">
              <div className="uk-card uk-card-default uk-card-body">
                <div className="uk-margin-remove subtitle">
                  <h4 className="uk-text-left uk-margin-remove">
                    Web Developer
                  </h4>
                  <span>January 2017 - August 2017</span>
                </div>

                <div className="uk-margin-remove subtitle">
                  <h5 className="uk-text-left uk-margin-remove">
                    Web Developer Co-op
                  </h5>

                  <span>
                    <small>September 2016 - December 2016</small>
                  </span>
                </div>
                <strong>Georgian College</strong>
                <div className="uk-text-small">
                  I was rehired as Web Developer by the Center for Innovation
                  and Applied Research, Georgian College, after my 4 month co-op
                  ended in December, 2016. I worked on this role while
                  completing my studies. My primary tasks included:
                  <br />
                  <ul>
                    <li>
                      Primarily worked on creating professional websites for
                      local business clients
                    </li>
                    <li>
                      Planning and developing website backend and front-end,
                      including hosting setup, website setup, theme
                      development/modification, plugin integrations and database
                      setup
                    </li>
                    <li>
                      Website design, including wireframe, prototype and mockups
                      development as well as communicating and getting approval
                      for the designs at each stage from the client
                    </li>
                    <li>
                      Initial client onboarding, requirements gathering, UI
                      strategy, prototype creation, branding & website & theme
                      development
                    </li>
                    <li>
                      Customizing plugins to support client needs (PHP,
                      JavaScript, Software Design
                    </li>
                  </ul>
                  <br />
                </div>
              </div>
            </div>

            <div className="contentBox">
              <div className="uk-card uk-card-default uk-card-body">
                <h4 className="uk-text-left uk-margin-remove">Peer Tutor</h4>
                <p className="uk-margin-remove">
                  <strong className="uk-text-left">Georgian College</strong>
                  <span className="rightFloat">
                    September 2016 - April 2017
                  </span>
                </p>
                <div className="uk-text-small">
                  Provided academic assistance to students experiencing
                  difficulty in specific course content related to my field of
                  study (Computer Programming). This included providing tuitions
                  to students, working with them to understand where they are
                  having difficulties, motivating and encouraging them to learn
                  more.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
