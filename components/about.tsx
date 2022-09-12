export default function AboutComponent() {
  return (
    <div id="about" uk-grid>
      <div id="aboutMeBackground" className="uk-width-2-5">
        <div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
      <div
        id="aboutMeContainer"
        className="uk-width-3-5 uk-flex uk-flex-center uk-padding"
      >
        <div className="uk-padding">
          <blockquote>
            &quot;Our greatest glory is not in never falling, but in rising
            every time we fall.&quot;
          </blockquote>
          <h6> - Confucius</h6>
        </div>
      </div>
    </div>
  );
}
