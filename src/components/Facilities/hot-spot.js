import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaPlus } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";

function HotSpot(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="hot-spot-div">
      <button
        onClick={handleShow}
        className="hot-spot-btn"
        data-tooltip-id="hotspot-tooltip"
        data-tooltip-content={props.title}
      >
        <FaPlus />
      </button>
      <Tooltip
        id="hotspot-tooltip"
        place="right"
        effect="solid"
        className="custom-tooltip"
      />
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="d-md-flex ">
            <div className="col-md-7">
              {" "}
              <img src={props.img} width="100%" />
            </div>
            <div className="col-md-5 facility-body">
              <h5>{props.title}</h5>
              <p>{props.body}</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default HotSpot;
