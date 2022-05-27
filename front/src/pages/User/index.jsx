import React from "react";
import { Link } from "react-router-dom";

function User() {
  return (
    <div className="DashMain">
      <div>
        <Link to="/createUser" className="nav-link">
          <h1 style={{ color: "#424242" }}>Create User</h1>
        </Link>
      </div>
      <div>
        <Link to="/user" className="nav-link">
          <h1 style={{ color: "#424242" }}>Users</h1>
        </Link>
      </div>
      <div>
        <Link to="/Login" className="nav-link">
          <h1 style={{ color: "#424242" }}>Login</h1>
        </Link>
      </div>
    </div>
  );
}

export default User;
