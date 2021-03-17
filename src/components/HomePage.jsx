import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const HomePage = () => {
  return (
    <div>
      <div class="jumbotron"></div>
      <div class="row container">
        <div class="col-md-6 text-center">
          <Button
            id="btns"
            className="btn btn-lg"
            style={{
              backgroundColor: "#16c79a",
              color: "white",
              paddingLeft: "100px",
              paddingRight: "100px",
              marginLeft: "80px",
            }}
          >
            Search For Tenders
          </Button>
        </div>
        <div class="col-md-6 text-center">
          <Button
            id="btns"
            className="btn btn-lg"
            component={Link}
            to="/tenders"
            style={{
              backgroundColor: "#16c79a",
              color: "white",
              paddingLeft: "100px",
              paddingRight: "100px",
              marginLeft: "180px",
            }}
          >
            View All Tenders
          </Button>
        </div>
      </div>
      <br />
      <div className="container text-center">
        <h3>Categories</h3>
      </div>
    </div>
  );
};
export default HomePage;
