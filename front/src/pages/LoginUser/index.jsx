/** @format */
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import login from "./createuser.png";

function LoginUser() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    setData({
      ...data,
      [name]: value,
    });
  }

  const onSubmitForm = async (e) => {
    try {
      e.preventDefault();

      const res = await axios({
        method: "post",
        baseURL: "http://localhost:3333",
        url: "/api/v1/user/login",
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.data);
      //alert("Data Saved Successfully!");
      window.location.assign("http://localhost:3000/dashPolitician");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <center>
      <div style={{ color: "white", justifyContent: "center" }}>
        <br></br>
        <br></br>
        <div>
          <center>
            <img src={login} alt="login" style={{ width: "200px" }} />
          </center>
        </div>
        <br></br>
        <h2 style={{ fontFamily: "bolder" }}>Login Below</h2>
        <p style={{ fontFamily: "bolder" }}>
          Don't have an account?{" "}
          <Link to="/createUser" style={{ fontFamily: "bolder", color: "red" }}>
            Register
          </Link>
        </p>
        <br></br>
        <form
          noValidate
          onSubmit={(e) => onSubmitForm(e)}
          style={{ width: "30rem", fontWeight: "bolder" }}
        >
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="form-control"
              value={data.email}
              onChange={handleChange}
              style={{ background: "transparent" }}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              required
              className="form-control"
              value={data.password}
              onChange={handleChange}
              style={{ background: "transparent" }}
            />
          </div>
          <br></br>
          <div className="form-group">
            <input
              style={{ width: "10rem" }}
              type="submit"
              value="Login"
              className="btn btn-dark"
            />
          </div>
        </form>
      </div>
    </center>
  );
}

export default LoginUser;
