import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { RoutePaths } from "../../routes/route-paths";

function PartiesList() {
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
      const finalURL = "http://localhost:3333/api/v1/party/";
      const res = await axios.get(finalURL);
      return res.data.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const removeParty = (_id) => {
    try {
      if (window.confirm("Are you sure?")) {
        fetch("http://localhost:3333/api/v1/party/" + _id, {
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
      <h2 style={{ fontFamily: "bolder", fontStyle: "italic", color: "white" }}>Party Info</h2>
      <br></br>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Party Name</th>
            <th>Party Leader</th>
            <th>Party Secretary</th>
            <th>No Of Mps</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key="{item._id}">
              <td>{item.partyname}</td>
              <td>{item.partyleader}</td>
              <td>{item.partysecretary}</td>
              <td>{item.noofmps}</td>
              <td>
                <Link
                  to={`${RoutePaths.editParty}${item._id}`}
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
                  onClick={() => removeParty(item._id)}
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

export default PartiesList;
