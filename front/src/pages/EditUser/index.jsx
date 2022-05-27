/** @format */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

function EditUser() {
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const tempUser = await getData(id);
      setUser(tempUser);
      console.log(JSON.stringify(tempUser));
    };

    fetchData();
  }, []);

  const getData = async (id) => {
    try {
      const finalURL = "http://localhost:3333/api/v1/user/" + id;
      const res = await axios.get(finalURL);
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  function handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  }

  const onSubmitForm = async (e) => {
    console.log(JSON.stringify(user));
    try {
      e.preventDefault();

      const res = await axios({
        method: "patch",
        baseURL: "http://localhost:3333",
        url: "/api/v1/user/" + id,
        data: user,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.data);
      window.location.assign("http://localhost:3000/user");
      alert("Updated Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);
  if (!user) {
    return <>Loading the data</>;
  }

  return (
    <div style={{ color: "#424242" }}>
     <h2 style={{ fontFamily: "bolder", fontStyle: "italic" }}>Edit User Info</h2>
      <br></br>
      <form noValidate onSubmit={(e) => onSubmitForm(e)} style={{ float: "left", width: "30rem", fontWeight: "bolder" }}>
        <h5 style={{ fontStyle: "italic" }}>BASIC INFO</h5>
        <br></br>
        <div className="form-group">
          <label>Fullname</label>
          <input
            type="text"
            name="fullname"
            required
            className="form-control"
            defaultValue={user.fullname}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>NIC</label>
          <input
            type="text"
            name="nic"
            required
            className="form-control"
            defaultValue={user.nic}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <div>
          <DatePicker
              name="dob"
              value={format(new Date(user.dob), "yyyy-MM-dd")}
              onChange={(newDate) =>
                setUser({
                  ...user,
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
              defaultValue="Male"
              checked={user.gender === "Male"}
              onChange={handleChange}
              style={{ background: "transparent" }}
            />
            <label> Male </label>
          </div>
          <div className="form-group" style={{ fontWeight: "normal" }}>
            <input
              type="radio"
              name="gender"
              defaultValue="Female"
              checked={user.gender === "Female"}
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
            defaultValue={user.email}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phonenu"
            className="form-control"
            defaultValue={user.phonenu}
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
            defaultValue={user.school}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>Maximum Qualification</label>
          <input
            type="text"
            name="qualification"
            className="form-control"
            defaultValue={user.qualification}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <br></br>
        <div className="form-group">
          <input
            type="submit"
            value="Edit Info"
            className="btn btn-dark"
          />
        </div>
      </form>
    </div>
  );
}

export default EditUser;
