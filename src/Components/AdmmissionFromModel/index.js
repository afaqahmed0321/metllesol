import { Button, IconButton, Modal, TextField } from "@mui/material";
import React from "react";
import Backdrop from "@mui/material/Backdrop";
import "./index.css";
import { MuiTelInput } from "mui-tel-input";
import PhotoCamera from "@mui/icons-material/PhotoCamera";


const AdmmissionFromModel = ({
  open,
  onClose,
  phone,
  handleChange,
  cancel,
}) => {
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div className="w-100 d-flex align-items-center justify-content-center h-100 ">
          <div className="w-50 h-35 card shadow-lg px-5 py-2">
            <div className="card-body">
              <form className="row g-3">
                <div className="col-md-6">
                  <TextField
                    fullWidth
                    id="fName"
                    name="fName"
                    label="First Name"
                    variant="standard"
                  />
                </div>
                <div className="col-md-6">
                  <TextField
                    fullWidth
                    id="LName"
                    name="lName"
                    label="Last Name"
                    variant="standard"
                  />
                </div>
                <div className="col-12">
                  <TextField
                    fullWidth
                    id="email"
                    name="Email"
                    label="Email"
                    variant="standard"
                  />
                </div>
                <div className="col-12">
                  <MuiTelInput
                    value={phone}
                    onChange={handleChange}
                    className={"my-2 w-100"}
                    variant="standard"
                    placeholder="Enter Your Phone Number"
                  />
                </div>
                <div className="col-md-6">
                  <TextField
                    fullWidth
                    id="city"
                    name="City"
                    label="City"
                    variant="standard"
                  />
                </div>
                <div className="col-md-6">
                  <TextField
                    fullWidth
                    id="country"
                    name="Country"
                    label="Country"
                    variant="standard"
                  />
                </div>
                <div className="col-md-4">
                  <TextField
                    fullWidth
                    id="age"
                    name="Age"
                    label="Age"
                    variant="standard"
                  />
                </div>
                <div className="col-md-6">
                  <TextField
                    fullWidth
                    id="cnic"
                    name="CNIC"
                    label="CNIC"
                    variant="standard"
                  />
                </div>
                <div className="col-md-2 pt-3 ">
                  <Button
                    variant="contained"
                    component="label"
                    className="px-4 d-flex justify-content-center "
                  >
                    <input hidden accept="image/*" type="file" />
                    <PhotoCamera />
                  </Button>
                </div>
                <div className="col-md-12 ">
                  <Button
                    variant="contained"
                    component="label"
                    className="px-4 py-2 my-2 d-flex justify-content-center "
                  >
                    <input hidden accept="image/*" type="file" />
                    <PhotoCamera />
                  </Button>
                  <p className="text-danger">upload your picture</p>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" for="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>
                <div className="col-12 d-flex justify-content-end gap-2">
                  <div>
                    <Button
                      type="submit"
                      className="btn btn-primary bg-primary px-4 d-flex align-items-center text-center text-white"
                    >
                      Sign in
                    </Button>
                  </div>
                  <div>
                    <Button
                      onClick={cancel}
                      className="btn btn-danger px-4 bg-danger text-white"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AdmmissionFromModel;
