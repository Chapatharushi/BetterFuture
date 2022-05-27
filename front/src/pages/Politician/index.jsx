import React from "react";
import { Link } from "react-router-dom";
import suggest from "./politician.png";

function Politician() {
  return (
    <div className="DashMain">
      <div>
          <img src={suggest} alt="your suggestions" style={{ width: "12rem" }}/>
        </div>
        <br></br>
      <div>
        <Link to="/createPolitician" className="nav-link">
          <h1 style={{ color: "white" }}>Add Politician</h1>
        </Link>
      </div>
      <div>
        <Link to="/politicians" className="nav-link">
          <h1 style={{ color: "white" }}>Politicians</h1>
        </Link>
      </div>
    </div>
  );
}

export default Politician;
