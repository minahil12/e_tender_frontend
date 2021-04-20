import React from "react";
import Form from "react-bootstrap/Form";
import * as auth from "../services/authServices";
import Button from "@material-ui/core/Button";
import { toast } from "react-toastify";
const PublishTender = () => {
  const user = auth.getCurrentUser();

  // const [organization_name, setOrgName] = React.useState();
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
    data.append("organization_name", user);
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
    if (response.status === 201) {
      window.location.href = "/my-tenders"
      
      toast.success("Tender placed");;
    }
  };
  return (
    <div className="col-md-6 mx-auto text-center form p-4">
      <h5 className="mb-5 mt-3">Publish tender</h5>
      <Form>
        <div className="form-group">
          <div className="row">
            <input
              type="text"
              placeholder="enter title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <select
              type="text"
              placeholder="choose your category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="form-control"
            >
              <option value=""> [Please select one]</option>
              <option value="IT"> IT</option>
              <option value="Construction"> Construction</option>
              <option value="Electrical"> Electrical</option>
              <option value="Medical"> Medical</option>
              <option value="Oil and Gas"> Oil and Gas</option>
              <option value="Telecom"> Telecom</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <select
              type="text"
              placeholder="choose availibility status"
              onChange={(e) => {
                setAvailibility(e.target.value);
              }}
              className="form-control"
            >
              <option value=""> [Please select one]</option>
              <option value="Active"> Active</option>
              <option value="Inactive"> Inactive</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <select
              type="text"
              placeholder="region"
              onChange={(e) => {
                setRegion(e.target.value);
              }}
              className="form-control"
            >
              <option value="">[Please select one]</option>
              <option value="Punjab"> Punjab</option>
              <option value="Sindh"> Sindh</option>
              <option value="Khyber Pukhtunkhwa"> Khyber Pukhtunkhwa</option>
              <option value="Balochistan"> Balochistan</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <textarea
              type="text"
              placeholder="Enter your description"
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <input
              type="text"
              placeholder="ex. +92xxxxxxxxxx"
              onChange={(e) => {
                setContact(e.target.value);
              }}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <input
              type="date"
              placeholder="choose date"
              onChange={(e) => {
                setOpeningDate(e.target.value);
              }}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <input
              type="date"
              placeholder="choose date"
              onChange={(e) => {
                setLastDate(e.target.value);
              }}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <input
              type="file"
              placeholder="select file"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
              className="form-control"
            />
          </div>
        </div>
        {user && (
          <Button
            variant="contained"
            color="primary"
            id="btns"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        )}
        {!user && (
          <Button
            variant="contained"
            color="primary"
            disabled
            onClick={handleSubmit}
            id="btns"
          >
            Submit
          </Button>
        )}
      </Form>
    </div>
  );
};

export default PublishTender;
