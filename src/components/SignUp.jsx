import React, { useState, Component } from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import userServices from "../services/UserService";
import { toast } from "react-toastify";
toast.configure();
export default function Register() {
  const history = useHistory();
  const initialFormData = Object.freeze({
    organization_name: "",
    password: "",
    email: "",
    cnic: "",
    contact: "",
    address: "",
  });
  const [email, setEmail] = React.useState();
  const [organization_name, setOrganizationName] = React.useState();
  const [password, setPassword] = React.useState();
  const [ntn, setNTN] = React.useState(0);
  const [contact, setContact] = React.useState();
  const [address, setAddress] = React.useState();

  return (
    <div>
      <div class="row">
        <div class="col-md-6"></div>
        <div class="col-md-6">
          <h1>Sign Up</h1>
          <form>
            <div className="form-group">
              <label htmlFor="organization_name">Organization Name</label>
              <input
                id="organization_name"
                type="text"
                className="form-control"
                onChange={(e) => {
                  setOrganizationName(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="form-control"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="form-control"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="ntn">CNIC</label>
              <input
                id="ntn"
                type="number"
                className="form-control"
                onChange={(e) => {
                  setNTN(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact No</label>
              <input
                id="contact"
                type="text"
                className="form-control"
                onChange={(e) => {
                  setContact(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                type="text"
                className="form-control"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>

            <Button
              id="btns"
              onClick={(e) => {
                userServices
                  .register(
                    organization_name,
                    password,
                    email,
                    ntn,
                    contact,
                    address
                  )
                  .then((data) => {
                    console.log(data);
                    toast.success("Successfuly registered", {
                      position: toast.POSITION.TOP_CENTER,
                    });
                  })
                  .catch((err) => {
                    console.log(err);
                    toast.error("Error registering", {
                      position: toast.POSITION.TOP_CENTER,
                    });
                  });
              }}
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
