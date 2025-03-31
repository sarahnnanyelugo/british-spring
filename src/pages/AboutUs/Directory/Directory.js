import React, { useState } from "react";
import "./directory.scss";
import Img5 from "../../../assets/images/court.jpg";
import Img6 from "../../../assets/images/boarding.jpg";
import Img7 from "../../../assets/images/lib.jpg";
import { StaffProfile } from "./StaffProfile";
import { staffData } from "../../../TestData/staffData";
import { SectionHeading } from "../../../components/SectionHeading/SectionHeading";

const ImageRoll = ({ image, caption, onMoreInfo, portfolio }) => {
  const generateNestedElements = (depth) =>
    depth === 0 ? null : <i>{generateNestedElements(depth - 1)}</i>;

  return (
    <figure className="imageRoll" style={{ "--imageUrl": `url(${image})` }}>
      {generateNestedElements(60)}
      <figcaption>
        <h4>
          {" "}
          <strong>{caption}</strong> <br />
        </h4>
        <h6>
          <em>{portfolio}</em>
        </h6>

        <center>
          {" "}
          <button className="more-info" onClick={onMoreInfo}>
            More Info
          </button>
        </center>
      </figcaption>
    </figure>
  );
};

export const Directory = () => {
  const [selectedData, setSelectedData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => {
    setSelectedIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev < staffData.length - 1 ? prev + 1 : prev));
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };
  return (
    <div className="directory">
      <div className="banner"></div>

      <div className="col-md-10 offset-md-1">
        <h1 className="offset-md-1">
          Meet the <span>Team</span>
        </h1>
        <div className="gallery">
          {staffData.map((staff, index) => (
            <ImageRoll
              key={staff.id}
              image={staff.url}
              caption={staff.caption}
              portfolio={staff.portfolio}
              onMoreInfo={() => openModal(index)}
            />
          ))}
        </div>
      </div>

      {/* StaffProfile Modal */}
      {selectedIndex !== null && (
        <StaffProfile
          show={showModal}
          handleClose={closeModal}
          url={staffData[selectedIndex].url}
          caption={staffData[selectedIndex].caption}
          portfolio={staffData[selectedIndex].portfolio}
          qualification={staffData[selectedIndex].qualification}
          details={staffData[selectedIndex].details}
          onNext={nextImage}
          onPrev={prevImage}
          disableNext={selectedIndex === staffData.length - 1}
          disablePrev={selectedIndex === 0}
        />
      )}
    </div>
  );
};
