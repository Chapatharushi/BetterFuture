import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { RoutePaths } from "../../routes/route-paths";
import "../../app/App";

function PoliticiansList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tempData = await getData();
      setData(tempData);
      console.log(JSON.stringify(tempData));
    };
    fetchData();
  }, []);

  const getData = async () => {
    try {
      const finalURL = "http://localhost:3333/api/v1/politician/";
      const res = await axios.get(finalURL);
      return res.data.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const removePolitician = (_id) => {
    try {
      if (window.confirm("Are you sure?")) {
        fetch("http://localhost:3333/api/v1/politician/" + _id, {
          method: "delete",
          headers: {
            Accept: "application/json",
            "content-Type": "application/json",
          },
        });
        window.location.reload(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2 style={{ fontFamily: "bolder", fontStyle: "italic", color: "white" }}>Politicians Info</h2>
      <br></br>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Fullname</th>
            <th>Party</th>
            <th>Position</th>
            <th>District</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key="{item._id}">
              <td>{item.fullname}</td>
              <td>{item.party}</td>
              <td>{item.position}</td>
              <td>{item.district}</td>
              <td>{item.rating}</td>
              <td>
                <Link
                  to={`${RoutePaths.editPolitician}${item._id}`}
                  style={{
                    color: "green",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Edit |{" "}
                </Link>
                <Link
                  className="btn btn-outline-danger"
                  onClick={() => removePolitician(item._id)}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PoliticiansList;
