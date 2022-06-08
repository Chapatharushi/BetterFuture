import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { RoutePaths } from "../../routes/route-paths";
import "../../app/App";

function PoliciesList() {
  const [policy, setPolicy] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tempPolicy = await getData();
      setPolicy(tempPolicy);
      console.log(JSON.stringify(tempPolicy));
    };
    fetchData();
  }, []);

  const getData = async () => {
    try {
      const finalURL = "http://localhost:3333/api/v1/policy/";
      const res = await axios.get(finalURL);
      return res.data.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const removePolicy = (_id) => {
    try {
      if (window.confirm("Are you sure?")) {
        fetch("http://localhost:3333/api/v1/policy/" + _id, {
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
      <h2 style={{ fontFamily: "bolder", fontStyle: "italic", color: "white" }}>Policy Suggestions</h2>
      <br></br>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Title</th>
            <th>Subject</th>
            <th>Challenge</th>
            <th>Suggestion</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {policy.map((item) => (
            <tr key="{item._id}">
              <td>{item.title}</td>
              <td>{item.subject}</td>
              <td>{item.challenge}</td>
              <td>{item.suggestion}</td>
              <td>{item.rating}</td>
              <td>
                <Link
                  to={`${RoutePaths.editPolicy}${item._id}`}
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
                  onClick={() => removePolicy(item._id)}
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

export default PoliciesList;
