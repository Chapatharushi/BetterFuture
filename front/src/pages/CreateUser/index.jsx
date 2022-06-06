/** @format */
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import create from "./createuser.png";

function CreateUser() {
  const [data, setData] = useState({
    fullname: "",
    nic: "",
    dob: new Date(),
    gender: "",
    email: "",
    phonenu: "",
    school: "",
    qualification: "",
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
        url: "/api/v1/user/",
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.data);
      //alert("Data Saved Successfully!");
      window.location.assign("http://localhost:3000/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ color: "white", marginRight: "10rem",marginLeft: "10rem", justifyContent: "center" }}>
      <br></br>
      <br></br>
      <h2 style={{ fontFamily: "bolder", marginLeft: "27rem", fontSize: "2rem" }}>Register Below</h2>
      <br></br>
        <p style={{ fontFamily: "bolder", marginLeft: "27rem" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ fontFamily: "bolder", color: "red" }}>
            Login
          </Link>
        </p>
      <br></br>
      <div>
        <img
          src={create}
          alt="create"
          style={{ width: "250px", marginLeft: "25rem" }}
        />
      </div>
      <br></br>
      <br></br>
      <form
        noValidate
        onSubmit={(e) => onSubmitForm(e)}
        style={{ float: "left", width: "30rem", fontWeight: "bolder" }}
      >
        <h5 style={{ fontStyle: "italic" }}>BASIC INFO</h5>
        <div className="form-group">
          <label>Fullname :</label>
          <input
            type="text"
            name="fullname"
            required
            className="form-control"
            value={data.fullname}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>NIC :</label>
          <input
            type="text"
            name="nic"
            required
            className="form-control"
            value={data.nic}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>Date of Birth :</label>
          <div>
            <DatePicker
              name="dob"
              selected={data.dob}
              onChange={(newDate) =>
                setData({
                  ...data,
                  dob: newDate,
                })
              }
            />
          </div>
        </div>
        <div className="form-group">
          <label>Gender</label>
          <div className="form-group" style={{ fontWeight: "normal" }}>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={data.gender === "Male"}
              onChange={handleChange}
              style={{ background: "transparent" }}
            />
            <label> Male </label>
          </div>
          <div className="form-group" style={{ fontWeight: "normal" }}>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={data.gender === "Female"}
              onChange={handleChange}
              style={{ background: "transparent" }}
            />
            <label> Female </label>
          </div>
        </div>
        <h5 style={{ fontStyle: "italic" }}>CONTACT INFO</h5>
        <div className="form-group">
          <label>Email Address :</label>
          <input
            type="text"
            name="email"
            className="form-control"
            value={data.email}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>Phone Number :</label>
          <input
            type="text"
            name="phonenu"
            className="form-control"
            value={data.phonenu}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        </form>
      <form
        noValidate
        onSubmit={(e) => onSubmitForm(e)}
        style={{ float: "right", width: "30rem", fontWeight: "bolder" }}
      >
        <h5 style={{ fontStyle: "italic" }}>EDUCATIONAL INFO</h5>
        <br></br>
        <div className="form-group">
          <label>School :</label>
          <input
            type="text"
            name="school"
            className="form-control"
            value={data.school}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>Maximum Qualification :</label>
          <input
            type="text"
            name="qualification"
            className="form-control"
            value={data.qualification}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <br></br>
        <h5 style={{ fontStyle: "italic" }}>SECURITY INFO</h5>
        <br></br>
        <div className="form-group">
          <label>Password :</label>
          <input
            type="text"
            name="password"
            className="form-control"
            value={data.password}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password :</label>
          <input
            type="text"
            name="passwordCheck"
            className="form-control"
            value={data.passwordCheck}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <br></br>
        <div className="form-group">
          <input
            style={{ width: "10rem" }}
            type="submit"
            value="Sign Up"
            className="btn btn-dark"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateUser;