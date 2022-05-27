/** @format */
import React, { useState } from "react";
import axios from "axios";
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddParty() {
  const [data, setData] = useState({
    partyname: "",
    partyleader: "",
    partysecretary: "",
    noofmps: "",
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
        url: "/api/v1/party/",
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.data);
      alert("Data Saved Successfully!");
      window.location.assign("http://localhost:3000/parties");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ color: "#424242" }}>
      <h2 style={{ fontFamily: "bolder", fontStyle: "italic" }}>Add Party</h2>
      <br></br>
      <form
        noValidate
        onSubmit={(e) => onSubmitForm(e)}
        style={{ width: "30rem", fontWeight: "bolder" }}
      >
      <h5>BASIC INFO</h5>
      <br></br>
        <div className="form-group">
          <label>Party Name :</label>
          <input
            type="text"
            name="partyname"
            required
            className="form-control"
            value={data.partyname}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>Party Leader :</label>
          <input
            type="text"
            name="partyleader"
            required
            className="form-control"
            value={data.partyleader}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>Party Secretary :</label>
          <input
            type="text"
            name="partysecretary"
            required
            className="form-control"
            value={data.partysecretary}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>No Of MPs :</label>
          <input
            type="text"
            name="noofmps"
            required
            className="form-control"
            value={data.noofmps}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <br></br>
        <div className="form-group">
          <input
            type="submit"
            value="Add Parties"
            className="btn btn-dark"
          />
        </div>
      </form>
    </div>
  );
}

export default AddParty;
