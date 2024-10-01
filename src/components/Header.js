import React from "react";

function Header() {
  return (
    <header>
      <nav className="row pb-5">
        <div className="col-12 col-lg-8">
          <h1 id="logo"><a className="text-white" href="./index.html">TEH BENWAY</a></h1>
        </div>
        <div className="col-12 col-lg-4">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link text-white" href="#aboutme">(ABOUT ME)</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#connect">(LET'S CONNECT)</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="mailto:teh.benway@gmail.com">
                <i className="fa-regular fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
