import React from "react";
import Form from "react-bootstrap/Form";
import * as auth from "../services/authServices";
import Button from "@material-ui/core/Button";
const PublishTender = () => {
  const user = auth.getCurrentUser();

  const [organization_name, setOrgName] = React.useState();
  const [category, setCategory] = React.useState();
  const [title, setTitle] = React.useState();
  const [availibility, setAvailibility] = React.useState();
  const [region, setRegion] = React.useState();
  const [description, setDesc] = React.useState();
  const [contact, setContact] = React.useState();
  const [opening_date, setOpeningDate] = React.useState();
  const [last_date, setLastDate] = React.useState();
  const [file_uploaded, setFile] = React.useState();

  const handleSubmit = async () => {
    var data = new FormData();
    data.append("organization_name", organization_name);
    data.append("title", title);
    data.append("category", category);
    data.append("availibility", availibility);
    data.append("region", region);
    data.append("description", description);
    data.append("contact", contact);
    data.append("opening_date", opening_date);
    data.append("last_date", last_date);
    data.append("file_uploaded", file_uploaded);

    const response = await auth.publishTender(data);
    console.log(response);
  };
  return (
    <div className="col-md-6 mx-auto text-center form p-4">
      <Form>
        <div className="row">
          <input
            type="text"
            placeholder="organization Name"
            onChange={(e) => {
              setOrgName(e.target.value);
            }}
          />
        </div>
        <div className="row">
          <input
            type="text"
            placeholder="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="row">
          <select
            type="text"
            placeholder="category"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="IT"> IT</option>
            <option value="Construction"> Construction</option>
          </select>
        </div>
        <div className="row">
          <select
            type="text"
            placeholder="availibility"
            onChange={(e) => {
              setAvailibility(e.target.value);
            }}
          >
            <option value="Active"> Active</option>
            <option value="Inactive"> Inactive</option>
          </select>
        </div>
        <div className="row">
          <select
            type="text"
            placeholder="region"
            onChange={(e) => {
              setRegion(e.target.value);
            }}
          >
            <option value="Punjab"> Punjab</option>
            <option value="Sindh"> Sindh</option>
          </select>
        </div>
        <div className="row">
          <input
            type="text"
            placeholder="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="row">
          <textarea
            type="text"
            placeholder="title"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>
        <div className="row">
          <input
            type="text"
            placeholder="contat"
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
        </div>
        <div className="row">
          <input
            type="date"
            placeholder="title"
            onChange={(e) => {
              setOpeningDate(e.target.value);
            }}
          />
        </div>
        <div className="row">
          <input
            type="date"
            placeholder="title"
            onChange={(e) => {
              setLastDate(e.target.value);
            }}
          />
        </div>
        <div className="row">
          <input
            type="file"
            placeholder="title"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
        </div>
        {user && (
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        )}
        {!user && (
          <Button
            variant="contained"
            color="primary"
            disabled
            onClick={handleSubmit}
          >
            Submit
          </Button>
        )}
      </Form>
    </div>
  );
};

export default PublishTender;
