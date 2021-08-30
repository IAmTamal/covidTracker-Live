// use recp for this

import React, { Component } from "react";
import PropTypes from "prop-types";

export class Navbar extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <section id="Navbarrr">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              {/* <!-- navbar brand --> */}
              <a href="/" className="navbar-brand">
                newsMonkey
              </a>

              {/* <!-- hamburger menu --> */}
              <button
                className="navbar-toggler me-1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navtoggle"
                aria-controls="navtoggle"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* <!-- navbar er baaki shob jinish --> */}
              <div className="collapse navbar-collapse" id="navtoggle">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Home
                    </a>
                  </li>

                  <li className="nav-item" id="lg">
                    <a className="nav-link" href="/">
                      About
                    </a>
                  </li>

                  <li className="nav-item" id="lg">
                    <a className="nav-link" href="/">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- end of navbar --> */}
            </nav>
          </div>
        </section>
      </div>
    );
  }
}

export default Navbar;
