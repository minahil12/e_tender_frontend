import React from "react";
import SearchField from "react-search-field";
import Button from "@material-ui/core/Button";
import * as auth from "../services/authServices";

const Search = () => {
  const [search, setSearch] = React.useState();
  const [result, setRes] = React.useState();
  const [show, setShow] = React.useState(null);

  const handleChange = () => {
    console.log("clicked");
    auth
      .searchTender(search)
      .then((res) => {
        setRes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //getData();
  // React.useEffect(getData, []);
  // if (!result || result.length == 0) { return <p>No Search</p>;
  console.log(result);
  return (
    <div className="container " style={{ marginTop: "50px" }}>
      <div className="container">
        <div className="form-group">
          <div className="row">
            <div className="col-md-6">
              <input
                className="form-control"
                placeholder="Search..."
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
            <div className="col">
              <Button
                variant="contained"
                color="primary"
                id="btns"
                onClick={handleChange}
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      {result && (
        <div className="container text-left" style={{ marginTop: "50px" }}>
          {result.map((post) => {
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
        </div>
      )}
    </div>
  );
};

export default Search;
