import React, { Component } from "react";

const Categoriescards = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <a className="stretched-link" href="/category?c=medical">
            <div class="card img-fluid" style={{ width: "300px" }}>
              <img
                class="card-img-top"
                src="./medical.jfif"
                alt="Card image"
                style={{ width: "100%" }}
              />

              <div
                class="card-img-overlay mask"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                }}
              >
                Medical
              </div>
            </div>
          </a>
        </div>

        <div className="col-md-4">
          <a className="stretched-link" href="/category?c=Construction">
            <div class="card img-fluid" style={{ width: "300px" }}>
              <img
                class="card-img-top"
                src="./construction.jfif"
                alt="Card image"
                style={{ width: "100%" }}
              />
              <div
                class="card-img-overlay mask"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                }}
              >
                Construction
              </div>
            </div>
          </a>
        </div>

        <div className="col-md-4">
          <a className="stretched-link" href="/category?c=IT">
            <div class="card img-fluid" style={{ width: "300px" }}>
              <img
                class="card-img-top"
                src="./it.jfif"
                alt="Card image"
                style={{ width: "100%" }}
              />
              <div
                class="card-img-overlay mask"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                }}
              >
                IT
              </div>
            </div>
          </a>
        </div>
      </div>
      <br /> <br />
      <div className="row">
        <div className="col-md-4">
          <a className="stretched-link" href="/category?c=Oil">
            <div class="card img-fluid" style={{ width: "300px" }}>
              <img
                class="card-img-top"
                src="./oil.jfif"
                alt="Card image"
                style={{ width: "100%" }}
              />
              <div
                class="card-img-overlay mask"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                }}
              >
                Oil and Gas
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4">
          <a className="strectched-link" href="/category?c=Electrical">
            <div class="card img-fluid" style={{ width: "300px" }}>
              <img
                class="card-img-top"
                src="./electrical.jfif"
                alt="Card image"
                style={{ width: "100%" }}
              />
              <div
                class="card-img-overlay mask"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                }}
              >
                Electrical
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4">
          <a className="strectched-link" href="/category?c=Telecom">
            <div class="card img-fluid" style={{ width: "300px" }}>
              <img
                class="card-img-top"
                src="./telecom.jfif"
                alt="Card image"
                style={{ width: "100%" }}
              />
              <div
                class="card-img-overlay mask"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                }}
              >
                Telecom
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categoriescards;
