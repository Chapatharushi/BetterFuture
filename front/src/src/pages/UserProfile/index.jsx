/** @format */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { RoutePaths } from "../../routes/route-paths";
import userP from "./user.png";

function EditUser() {
  const id = "629cda8be804d3037a4dc643";
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

  const onSubmitForm = async (e) => {
    console.log(JSON.stringify(user));
    try {
      e.preventDefault();

      const res = await axios({
        method: "get",
        baseURL: "http://localhost:3333",
        url: "/api/v1/user/" + id,
        data: user,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.data);
      window.location.assign("http://localhost:3000/user");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);
  if (!user) {
    return <>Loading the data</>;
  }

  return (
    <div>
      <h1 style={{ fontFamily: "bolder", color: "white", textAlign: "center" }}>WELCOME !</h1>
      <br></br>
        <div>
          <img src={ userP } alt="user" style={{ width: "25%", float: "left", marginLeft: "15em", marginTop: "2em" }} />
        </div>
      <form
        noValidate
        onSubmit={(e) => onSubmitForm(e)}
        style={{ width: "20rem", fontWeight: "bolder", float: "right", marginRight: "15em" }}
      >
        <br></br>
        <div className="form-group">
          <input
            type="text"
            name="fullname"
            required
            className="form-control"
            value={user.fullname}
            style={{ background: "transparent", color: "white", textAlign: "center" }}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="nic"
            required
            className="form-control"
            value={user.nic}
            style={{ background: "transparent", color: "white", textAlign: "center" }}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="email"
            className="form-control"
            value={user.email}
            style={{ background: "transparent", color: "white", textAlign: "center" }}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="phonenu"
            className="form-control"
            value={user.phonenu}
            style={{ background: "transparent", color: "white", textAlign: "center" }}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="school"
            className="form-control"
            value={user.school}
            style={{ background: "transparent", color: "white", textAlign: "center" }}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="qualification"
            className="form-control"
            value={user.qualification}
            style={{ background: "transparent", color: "white", textAlign: "center" }}
          />
        </div>
        <br></br>
        <div>
          <Link
            className="btn btn-dark"
            style={{ width: "12rem", marginLeft: "4rem" }}
            to={`${RoutePaths.editUser}${user._id}`}
          >
            Edit Info
          </Link>
        </div>
      </form>
    </div>
  );
}

export default EditUser;
