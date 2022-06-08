import React from "react";
import { Link } from "react-router-dom";
import suggest from "./idea.png";

function Policy() {
  return (
    <div className="DashMain">
      <div>
        <img src={suggest} alt="your suggestions" style={{ width: "12rem" }} />
      </div>
      <br></br>
      <div>
        <Link to="/createPolicy" className="nav-link">
          <h1 style={{ color: "white" }}>Add Policy</h1>
        </Link>
      </div>
      <div>
        <Link to="/policies" className="nav-link">
          <h1 style={{ color: "white" }}>Policies</h1>
        </Link>
      </div>
    </div>
  );
}

export default Policy;
