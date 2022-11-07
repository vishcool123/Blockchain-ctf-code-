import React from "react";
import "../App.css";
// eslint-disable-next-line
import { searchMovie } from "./Action/Main";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img src="https://www.vulnmachines.com/frontend/images/logo/Logo-vulnmachines.png" className="dib" alt="flag" style={{ width: "200px", minWidth: "200px" }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className={`nav-item ${window.location.pathname === "/" ? "active" : "HOME"}`}>
              <Link className="nav-link" to="/">HOME</Link>
            </li>
            <li className={`nav-item ${window.location.pathname === "/" ? "active" : "CHALLENGES"}`}>
              <Link className="nav-link" to="/Challenges">CHALLENGES</Link>
            </li>
          </ul>
          <a className="navbar-brand" href="/">
            <img src="https://www.vulnmachines.com/frontend/images/logo/secopst.png" className="dib" alt="flag" style={{ width: "200px", minWidth: "200px" }} />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default connect(null, { searchMovie })(Header);
