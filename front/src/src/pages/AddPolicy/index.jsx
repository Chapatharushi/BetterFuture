/** @format */
import React, { useState } from "react";
import axios from "axios";
import suggest from './idea.png';
import "../../app/App";

function CreatePolicy() {
  const [data, setData] = useState({
    title: "",
    subject: "",
    challenge: "",
    suggestion: "",
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
        url: "/api/v1/policy/",
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.data);
      alert("Data Saved Successfully!");
      window.location.assign("http://localhost:3000/policies");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ color: "white" }}>
      <h2 style={{ fontFamily: "bolder", fontStyle: "italic" }}>Suggest a Policy</h2>
      <br></br>
      <form
        noValidate
        onSubmit={(e) => onSubmitForm(e)}
        style={{ width: "30rem", fontWeight: "bolder" }}
      >
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            required
            className="form-control"
            value={data.title}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            required
            className="form-control"
            value={data.subject}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>Challenge</label>
          <input
            type="text"
            name="challenge"
            required
            className="form-control"
            value={data.challenge}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <label>Suggestion</label>
          <input
            type="text"
            name="suggestion"
            required
            className="form-control"
            value={data.suggestion}
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
            value="Suggest Policy"
            className="btn btn-dark"
          />
        </div>
      </form>
      <form style={{ float: "right", marginTop: "-580px" }}>
        <div>
          <img src={suggest} alt="your suggestions" style={{ width: "32rem" }}/>
        </div>
      </form>
    </div>
  );
}

export default CreatePolicy;
