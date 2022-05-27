/** @format */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditParty() {
  const { id } = useParams();
  const [party, setParty] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const tempParty = await getData(id);
      setParty(tempParty);
      console.log(JSON.stringify(tempParty));
    };

    fetchData();
  }, []);

  const getData = async (id) => {
    try {
      const finalURL = "http://localhost:3333/api/v1/party/" + id;
      const res = await axios.get(finalURL);
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  function handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    setParty({
      ...party,
      [name]: value,
    });
  }

  const onSubmitForm = async (e) => {
    console.log(JSON.stringify(party));
    try {
      e.preventDefault();

      const res = await axios({
        method: "patch",
        baseURL: "http://localhost:3333",
        url: "/api/v1/party/" + id,
        data: party,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.data);
      window.location.assign("http://localhost:3000/parties");
      alert("Updated Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(party);
  if (!party) {
    return <>Loading the data</>;
  }

  return (
    <div style={{ color: "#424242" }}>
       <h2 style={{ fontFamily: "bolder", fontStyle: "italic" }}>Edit Party</h2>
      <br></br>
      <form noValidate onSubmit={(e) => onSubmitForm(e)} style={{ width: "30rem", fontWeight: "bolder" }}>
        <h5>BASIC INFO</h5>
        <br></br>
        <div className="form-group">
          <label>Partyname :</label>
          <input
            type="text"
            name="partyname"
            required
            className="form-control"
            defaultValue={party.partyname}
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
            defaultValue={party.partyleader}
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
            defaultValue={party.partysecretary}
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
            defaultValue={party.noofmps}
            onChange={handleChange}
            style={{ background: "transparent" }}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Edit Parties"
            className="btn btn-dark"
          />
        </div>
      </form>
    </div>
  );
}

export default EditParty;
