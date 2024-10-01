import React from "react";

function About() {
  return (
    <section className="about" id="aboutme">
      <h2 className="text-white pb-5 ps-5">About <span>me__</span></h2>
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 text-white">
          <img src="%PUBLIC_URL%/images/profile-pic.png" className="img-fluid mx-auto d-block" alt="Profile" />
        </div>
        <div className="col-12 col-lg-6">
          <p className="text-start text-white pe-5">
            Welcome sur mon <span>portfolio</span> ! Ancien professionnel du commerce avec <span>10 ans
            d'expérience</span> dans la mode principalement, je suis actuellement en reconversion dans le <span>développement web</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
