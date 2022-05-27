/** @format */

import React from "react";
import { Link } from "react-router-dom";
import user from "./user.png";

const NavBar = () => (
  <nav className="navbar navbar-dark bg-dark navbar-expand-md">
    <Link to="/dashLanding" className="navbar-brand">
      Better Future
    </Link>

    <div className="collpase navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link to="/dashPolitician" className="nav-link">
            Politician
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/dashPolicy" className="nav-link">
            Policy
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/dashParty" className="nav-link">
            Party
          </Link>
        </li>
        {/* <li className="navbar-item">
          <Link to="/dashUser" className="nav-link">
            User Profile
          </Link>
        </li> */}
        <li className="navbar-item" style={{ float: "right", marginLeft: "800px" }}>
          <Link to="/user" className="nav-link">
          <img src={user} alt="user" style={{width: "2rem"}}/>
          </Link>
        </li>
        <li style={{ float: "right" }}>
          <Link
            to="/dashLanding"
            style={{
              borderRadius: "3px",
              letterSpacing: "1.5px",
              width: "10rem",
            }}
            className="btn btn-dark"
          >
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
