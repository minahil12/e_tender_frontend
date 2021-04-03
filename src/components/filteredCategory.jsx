import React, { useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
const FilteredCategory = () => {
  const querystring = window.location.search;
  const URLParams = new URLSearchParams(querystring);
  const category = URLParams.get("c");
  const [tenders, setTenders] = useState([]);

  const getData = () => {
    axios
      .get("http://127.0.0.1:8000/api/publish-tender/")
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
        .filter((x) => x.category === category)
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

export default FilteredCategory;
