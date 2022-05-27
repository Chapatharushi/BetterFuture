import React from "react";
import { Link } from "react-router-dom";

function Party() {
  return (
    <div className="DashMain">
      <div>
        <Link to="/createParty" className="nav-link">
          <h1 style={{ color: "#424242" }}>Add Party</h1>
        </Link>
      </div>
      <div>
        <Link to="/parties" className="nav-link">
          <h1 style={{ color: "#424242" }}>Parties</h1>
        </Link>
      </div>
    </div>
  );
}

export default Party;
