import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CategoriesCard from "./CategoriesCards";
import LatestTenders from "./latestTenders";
const HomePage = () => {
  return (
    <div>
      <div class="jumbotron"></div>
      <div class="row container">
        <div class="col-md-6 text-center">
          <Button
            id="mbtns"
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
            id="mbtns"
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
        <h2>Categories</h2>
        <br />
        <CategoriesCard />
      </div>
      <br />
      <br />
      <div className="container text-center solid">
        <h2>Latest Tenders</h2>
        <LatestTenders />
        <br />
      </div>
      <div className="container text-center">
        <h2>Our Clients</h2>
        <br />
      </div>
    </div>
  );
};
export default HomePage;
