import React from "react";
import Button from "@material-ui/core/Button";
import Form from "../common/form";

class ContactUs extends Form {
  render() {
    return (
      <div className="container">
        <h3 className="text-center mb-5 mt-5">Contact </h3>
        <div class="row">
          <div className="col-md-6">
            <div className="row mr-2">
              <div className="col-md-6">{this.renderInput("name", "Name")}</div>
              <div className="col-md-6 ">
                {this.renderInput("email", "Email")}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                {this.renderInput("subject", "Subject")}
              </div>
            </div>
            <div className="row">
              <div className="col">
                {this.renderTextField("message", "Message")}
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                {this.renderButton("Submit")}
              </div>
            </div>
          </div>
          <div className="col-md-6">Map</div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
