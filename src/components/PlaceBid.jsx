import React, { Component } from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import * as auth from "../services/authServices";
import { toast } from "react-toastify";
toast.configure();

class Bid extends Form {
  state = {
    data: {
      name: "",
      contact: "",
      no_of_days: "",
      bidding_amount: "",
      tenderId: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Name"),
    contact: Joi.string().required().label("Contact"),
    no_of_days: Joi.string().required().label("No of days"),
    bidding_amount: Joi.string().required().label("Bidding Amount"),
    tenderId: Joi.string().required().label("Tender Idt"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.postBid(
        data.name,
        data.contact,
        data.no_of_days,
        data.tenderId,
        data.bidding_amount
      );
      window.location = "/";
      toast.success("Successful Login");
    } catch (ex) {
      if (ex.response && ex.respone.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
        toast.error("An error occurred");
      }
    }
  };

  render() {
    const querystring = window.location.search;
    const URLParams = new URLSearchParams(querystring);
    const id = URLParams.get("id");

    return (
      <div className="col-md-6 mx-auto text-center form p-4" style={{}}>
        <h1 style={{ marginBottom: "53px" }}>Publish Tender</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Organization Name")}
          {this.renderInput("contact", "Contact")}
          {this.renderInput("no_of_days", "No Of Days")}
          {this.renderInput("bidding_amount", "Bidding Amount")}
          {this.renderInput1("tenderId", "Tender ID", id)}
          {this.renderButton("Publish")}
        </form>
      </div>
    );
  }
}

export default Bid;
