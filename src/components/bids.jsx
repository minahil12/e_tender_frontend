import React from "react";
import Button from "@material-ui/core/Button";
import * as auth from "../services/authServices";

const SearchBids = () => {
  const querystring = window.location.search;
  const URLParams = new URLSearchParams(querystring);
  const id = URLParams.get("id");
  const title = URLParams.get("tender");
  const [result, setRes] = React.useState();
  const [show, setShow] = React.useState(null);

  const getData = () => {
    auth
      .searchBids(id)
      .then((res) => {
        setRes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return result;
  };
  //getData();
  React.useEffect(getData, []);
  console.log("res is", result);
  if (!result || result.length == 0) return <p>No Bids to show</p>;
  console.log(result);
  return (
    <div className="container " style={{ marginTop: "50px" }}>
      <h5>Showing bids placed on Tender Title: {title}</h5>
      {result && (
        <div className="container text-left" style={{ marginTop: "50px" }}>
          {result.map((post) => {
            return (
              <div class="card mb-5">
                <div class="card-body">
                  <h5 class="card-title">{post.postedBy}</h5>

                  <p class="card-text">Amount: {post.bidding_amount}</p>

                  <Button
                    id="btns"
                    onClick={(e) => {
                      window.location.href = "/bid-details/?id=" + post.id;
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

export default SearchBids;
