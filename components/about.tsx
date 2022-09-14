import Image from "next/image";

export default function AboutComponent() {
  return (
    <div id="about" uk-grid="true">
      <div id="aboutMeBackground" className="uk-width-2-5">
        <div className="landingImageContainer">
          <div className="layer1">
            <Image
              src="/assets/images/landing-cover.jpg"
              alt="sample"
              layout="responsive"
              width="100%"
              height="100%"
              priority={true}
            />
          </div>
          <div className="layer2"></div>
          <div className="layer3"></div>
          <div className="layer4"></div>
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
