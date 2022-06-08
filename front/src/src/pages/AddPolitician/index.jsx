/** @format */
import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../app/App";

function AddPolitician() {
  const [data, setData] = useState({
    fullname: "",
    dob: new Date(),
    gender: "",
    email: "",
    officeAddress: "",
    homeAddress: "",
    officePhone: "",
    homePhone: "",
    school: "",
    maxQualifications: "",
    fb: "",
    utube: "",
    web: "",
    secretary: "",
    secPhone: "",
    secEmail: "",
    party: "",
    position: "",
    district: "",
    previousTerms: "",
    projectOngoing: "",
    rating: 5,
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
        url: "/api/v1/politician/",
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.data);
      alert("Data Saved Successfully!");
      window.location.assign("http://localhost:3000/politicians");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ color: "white" }}>
      <h2 style={{ fontFamily: "bolder", fontStyle: "italic" }}>Add Politician</h2>
      <br></br>
      <form
        noValidate
        onSubmit={(e) => onSubmitForm(e)}
        style={{ float: "left", width: "30rem", fontWeight: "bolder" }}
      >
        <h5 style={{ fontStyle: "italic" }}>BASIC INFO</h5>
        <br></br>
        <div className="form-group">
          <label>Fullname</label>
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
          <label>Date of Birth</label>
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
        <br></br>
        <h5 style={{ fontStyle: "italic" }}>CONTACT INFO</h5>
        <br></br>
        <div className="form-group">
          <label>Email Address</label>
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
          <label>Address - Office</label>
          <input
            type="text"
            name="officeAddress"
            className="form-control"
            value={data.officeAddress}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>Address - Home</label>
          <input
            type="text"
            name="homeAddress"
            className="form-control"
            value={data.homeAddress}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>Phone Number - Office</label>
          <input
            type="text"
            name="officePhone"
            className="form-control"
            value={data.officePhone}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>Phone Number - Home</label>
          <input
            type="text"
            name="homePhone"
            className="form-control"
            value={data.homePhone}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <br></br>
        <h5 style={{ fontStyle: "italic" }}>EDUCATIONAL INFO</h5>
        <br></br>
        <div className="form-group">
          <label>School</label>
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
          <label>Maximum Qualification</label>
          <select
            required
            name="maxQualifications"
            className="form-control"
            value={data.maxQualifications}
            onChange={handleChange}
            style={{ background: "transparent", color: "darkgray", fontWeight: "bolder", backgroundColor: "transparent" }}
          >
            <option value="Certificate">Certificate</option>
            <option value="Advanced Certificate">Advanced Certificate</option>
            <option value="Diploma">Diploma</option>
            <option value="Higher Diploma">Higher Diploma</option>
            <option value="Bachelors">Bachelors</option>
            <option value="Bachelors Hons.">Bachelors Hons.</option>
            <option value="PG Certificate or Diploma">PG Certificate or Diploma</option>
            <option value="MA, MSc">MA, MSc</option>
            <option value="MPhil, DM">MPhil, DM</option>
            <option value="PhD, MD">PhD, MD</option>
          </select>
        </div>
      </form>
      <form
        noValidate
        onSubmit={(e) => onSubmitForm(e)}
        style={{ float: "right", width: "30rem", fontWeight: "bolder" }}
      >
        <h5 style={{ fontStyle: "italic" }}>SOCIAL MEDIA INFO</h5>
        <br></br>
        <div className="form-group">
          <label>Facebook</label>
          <input
            type="text"
            name="fb"
            className="form-control"
            value={data.fb}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>Youtube</label>
          <input
            type="text"
            name="utube"
            className="form-control"
            value={data.utube}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>Website</label>
          <input
            type="text"
            name="web"
            className="form-control"
            value={data.web}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <h5 style={{ fontStyle: "italic" }}>POLITICAL INFO</h5>
        <br></br>
        <div className="form-group">
          <label>Secretary</label>
          <input
            type="text"
            name="secretary"
            className="form-control"
            value={data.secretary}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>Secretary Phone</label>
          <input
            type="text"
            name="secPhone"
            className="form-control"
            value={data.secPhone}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>Secretary Email</label>
          <input
            type="text"
            name="secEmail"
            className="form-control"
            value={data.secEmail}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>Party</label>
          <input
            type="text"
            name="party"
            className="form-control"
            value={data.party}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>Position</label>
          <input
            type="text"
            name="position"
            className="form-control"
            value={data.position}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>District</label>
          <select
            required
            name="district"
            className="form-control"
            value={data.district}
            onChange={handleChange}
            style={{ background: "transparent", color: "darkgray", fontWeight: "bolder", backgroundColor: "transparent" }}
          >
            <option value="Gampaha">Gampaha</option>
            <option value="Colombo">Colombo</option>
            <option value="Kalutara">Kalutara</option>
            <option value="Kandy">Kandy</option>
            <option value="Matale">Matale</option>
            <option value="Nuwara-Eliya">Nuwara-Eliya</option>
            <option value="Matara">Matara</option>
            <option value="Galle">Galle</option>
            <option value="Hambanthota">Hambanthota</option>
            <option value="Kegalle">Kegalle</option>
            <option value="Ratnapura">Ratnapura</option>
            <option value="Puttalam">Puttalam</option>
            <option value="Kurunegala">Kurunegala</option>
            <option value="Badulla">Badulla</option>
            <option value="Monaragala">Monaragala</option>
            <option value="Anuradapura">Anuradapura</option>
            <option value="Polonnaruwa">Polonnaruwa</option>
            <option value="Trincomalee">Trincomalee</option>
            <option value="Batticaloa">Batticaloa</option>
            <option value="Ampara">Ampara</option>
            <option value="Jaffna">Jaffna</option>
            <option value="Kilinochchi">Kilinochchi</option>
            <option value="Mannar">Mannar</option>
            <option value="Mullaitivu">Mullaitivu</option>
            <option value="Vavuniya">Vavuniya</option>
          </select>
        </div>
        <div className="form-group">
          <label>Previous Terms</label>
          <input
            type="text"
            name="previousTerms"
            className="form-control"
            value={data.previousTerms}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>Ongoing Projects</label>
          <input
            type="text"
            name="projectOngoing"
            className="form-control"
            value={data.projectOngoing}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>Rating</label>
          <input
            type="number"
            name="rating"
            className="form-control"
            value={data.rating}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <br></br>
        <div className="form-group">
          <input
            type="submit"
            value="Add Politician"
            className="btn btn-dark"
          />
        </div>
      </form>
    </div>
  );
}

export default AddPolitician;
