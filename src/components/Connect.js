import React from "react";

function Connect() {
  return (
    <section id="connect">
      <h2 className="text-white pb-5 ps-5">Let's <span>connect__</span></h2>
      <div className="row">
        <div className="col-12 text-white text-start d-flex flex-column" id="connecticon">
          <div className="col-12">
            <a className="text-white" href="https://www.linkedin.com/in/benwayteh/">
              <i className="fa-brands fa-linkedin">
                <p className="linkconnect"> LinkedIn</p>
              </i>
            </a>
          </div>
          <div className="col-12">
            <a className="text-white" href="https://github.com/LaStekpa">
              <i className="fa-brands fa-github">
                <p className="linkconnect"> GitHub</p>
              </i>
            </a>
          </div>
          <div className="col-12">
            <a className="text-white" href="mailto:teh.benway@gmail.com">
              <i className="fa-regular fa-envelope">
                <p className="linkconnect"> Mail</p>
              </i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Connect;
