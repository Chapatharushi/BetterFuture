import React from "react";
import { Link } from "react-router-dom";
import suggest from "./party.png";

function Party() {
  return (
    <div className="DashMain">
      <div>
        <img src={suggest} alt="your suggestions" style={{ width: "12rem" }} />
      </div>
      <br></br>
      <div>
        <Link to="/createParty" className="nav-link">
          <h1 style={{ color: "white" }}>Add Party</h1>
        </Link>
      </div>
      <div>
        <Link to="/parties" className="nav-link">
          <h1 style={{ color: "white" }}>Parties</h1>
        </Link>
      </div>
    </div>
  );
}

export default Party;
