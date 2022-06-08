import React from "react";
import { Link } from "react-router-dom";
import betterfuture from "./bf.png";
import Bfuture from "./BetterFuture.png";

function Landing() {
  return (
    <div>
      <br></br>
      <center>
      <img
          src={Bfuture}
          alt="BetterFuture"
          style={{ width: "200px", marginTop: "1rem" }}
        />
      </center>
      <div>
        <center>
        <img
          src={betterfuture}
          alt="Better Future"
          style={{ width: "500px", marginTop: "5rem", position: "absolute", marginLeft: "-250px" }}
        />
        </center>
      </div>
      <br></br>
      <center><div
        className="row"
        style={{ fontFamily: "bolder", marginTop: "12rem"}}
      >
        <div className="col">
          <Link
            to="/CreateUser"
            style={{
              borderRadius: "3px",
              letterSpacing: "1.5px",
              width: "20rem",
            }}
            className="btn btn-light"
          >
            Sign Up
          </Link>

          <br></br>
          <br></br>

          <Link
            to="/login"
            style={{
              width: "20rem",
              borderRadius: "3px",
              letterSpacing: "1.5px",
            }}
            className="btn btn-dark"
          >
            Sign In
          </Link>
        </div>
      </div></center>
    </div>
  );
}

export default Landing;
