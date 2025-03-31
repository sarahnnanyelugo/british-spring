import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const StaffProfile = ({
  show,
  handleClose,
  url,
  caption,
  portfolio,
  details,
  onNext,
  onPrev,
  disableNext,
  disablePrev,
}) => {
  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <h5>{caption}'s Profile</h5>
      </Modal.Header>
      <Modal.Body>
        <div className="d-md-flex profile-modal">
          {" "}
          <div className="col-md-7">
            {" "}
            <img src={url} alt={caption} className="img-fluid" />
          </div>
          <div className="col-md-5">
            {" "}
            <h4>{caption}</h4>
            <h6>
              <em>{portfolio}</em>
            </h6>
            <p>{details}</p>
          </div>
        </div>
      </Modal.Body>

      <div className="d-flex modal-navigation">
        {" "}
        <button onClick={onPrev} disabled={disablePrev} className=" ">
          Previous
        </button>
        <button onClick={onNext} disabled={disableNext}>
          Next
        </button>
      </div>
    </Modal>
  );
};
