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
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          <h6>{caption}'s Profile</h6>
        </Modal.Title>
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
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>{" "}
        <Button variant="primary" onClick={onPrev} disabled={disablePrev}>
          Previous
        </Button>
        <Button variant="primary" onClick={onNext} disabled={disableNext}>
          Next
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
