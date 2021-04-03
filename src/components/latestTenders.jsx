import React, { Component, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import * as auth from "../services/authServices";
const LatestTenders = () => {
  const [tenders, setTenders] = useState([]);

  const getData = () => {
    auth
      .getTenders()
      .then((res) => {
        setTenders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return tenders;
  };
  //getData();
  React.useEffect(getData, []);

  return (
    <div className="container text-left" style={{ marginTop: "50px" }}>
      {tenders
        .sort((a, b) => b.id - a.id)
        .slice(0, 3)
        .map((post) => {
          return (
            <div class="card mb-5">
              <div class="card-body">
                <h5 class="card-title">{post.organization_name}</h5>

                <p class="card-text">Sector: {post.category}</p>
                <p class="card-text">Description: {post.description}</p>
                <p class="card-text">Action Deadline: {post.last_date}</p>

                <Button
                  id="btns"
                  onClick={(e) => {
                    window.location.href = "/details/?id=" + post.id;
                  }}
                >
                  View Details
                </Button>
              </div>
            </div>
          );
        })}
      <Button id="btns" href="/tenders">
        View More
      </Button>
    </div>
  );
};

export default LatestTenders;
