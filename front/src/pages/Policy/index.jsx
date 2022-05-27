import React from "react";
import { Link } from "react-router-dom";

function Policy() {
  return (
    <div className="DashMain">
      <div>
        <Link to="/createPolicy" className="nav-link">
          <h1 style={{ color: "#424242" }}>Add Policy</h1>
        </Link>
      </div>
      <div>
        <Link to="/policies" className="nav-link">
          <h1 style={{ color: "#424242" }}>Policies</h1>
        </Link>
      </div>
    </div>
  );
}

export default Policy;
