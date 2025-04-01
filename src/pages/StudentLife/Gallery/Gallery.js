import React, { useState } from "react";
import { SectionHeading } from "../../../components/SectionHeading/SectionHeading";
import "./gallery.scss";
import { TbHandFingerDown } from "react-icons/tb";
import Hero from "../../../assets/images/happy-students.jpeg";
import Img from "../../../assets/images/academicHero.jpg";
import Img2 from "../../../assets/images/classSec.jpg";
import Img3 from "../../../assets/images/lab.jpg";
import Img4 from "../../../assets/images/welcome-hero.jpg";
import Img5 from "../../../assets/images/court.jpg";
import Img6 from "../../../assets/images/boarding.jpg";
import Img7 from "../../../assets/images/lib.jpg";
import Casual2 from "../../../assets/images/kid4.jpg";
import Casual3 from "../../../assets/images/kid5.jpg";
import Casual4 from "../../../assets/images/Kid15.jpg";
import Casual5 from "../../../assets/images/Kid16.png";
import Casual6 from "../../../assets/images/kid3.jpeg";
import Casual7 from "../../../assets/images/kid2.jpeg";
import Cultural1 from "../../../assets/images/cul1.png";
import Cultural3 from "../../../assets/images/cul3.jpg";
import Cultural4 from "../../../assets/images/cul3.png";
import Cultural5 from "../../../assets/images/cul4.png";
import Cultural2 from "../../../assets/images/cultural2.png";
import Cultural6 from "../../../assets/images/cultural3.png";
import Grad from "../../../assets/images/grad.png";
import Grad2 from "../../../assets/images/grad2.png";
import Grad3 from "../../../assets/images/gradu.png";
import Grad4 from "../../../assets/images/gradu2.png";
import { useImageViewer } from "../../../Utils/galleryUtils";

const imageLinks = [
  { src: Hero, id: "about-section", title: "About Us" },
  { src: Img, id: "academics-section", title: "Academics" },
  { src: Img2, id: "classrooms-section", title: "Classrooms" },
  { src: Img3, id: "lab-section", title: "Science Lab" },
  { src: Img4, id: "welcome-section", title: "Welcome" },
  { src: Img7, id: "library-section", title: "Library" },
  { src: Img5, id: "sports-section", title: "Sports" },
  { src: Img6, id: "boarding-section", title: "Boarding House" },
];

const casual = [
  { src: Casual2, alt: "Statue of Liberty" },
  { src: Casual3, alt: "Night Sky" },
  { src: Casual4, alt: "Ravine Between Rocks" },
  { src: Casual5, alt: "Wheat Farm" },
  { src: Casual6, alt: "City Street" },
  { src: Casual7, alt: "Crumbling Pier" },
  { src: Img2, alt: "Foggy Mountains" },
  { src: Img3, alt: "Dense Forest" },
  { src: Img7, alt: "Sunset Over Mountains" },
  {
    src: Img,
    alt: "",
  },
];

const cultural = [
  { src: Cultural1, alt: "Statue of Liberty" },
  { src: Cultural2, alt: "Night Sky" },
  { src: Cultural3, alt: "Ravine Between Rocks" },
  { src: Cultural4, alt: "Wheat Farm" },
  { src: Cultural5, alt: "City Street" },
  { src: Cultural6, alt: "Crumbling Pier" },
  { src: Cultural2, alt: "Foggy Mountains" },
  { src: Cultural1, alt: "Dense Forest" },
  { src: Cultural5, alt: "Sunset Over Mountains" },
  {
    src: Cultural6,
    alt: "",
  },
];
const graduation = [
  { src: Grad, alt: "Statue of Liberty" },
  { src: Grad2, alt: "Night Sky" },
  { src: Grad3, alt: "Ravine Between Rocks" },
  { src: Grad4, alt: "Wheat Farm" },
  { src: Cultural5, alt: "City Street" },
  { src: Cultural6, alt: "Crumbling Pier" },
  { src: Cultural2, alt: "Foggy Mountains" },
  { src: Cultural1, alt: "Dense Forest" },
  { src: Cultural5, alt: "Sunset Over Mountains" },
  {
    src: Cultural6,
    alt: "",
  },
];

export const Gallery = () => {
  const { selectedImage, openImage, closeImage, nextImage, prevImage } =
    useImageViewer(casual);
  const {
    selectedImage: selectedImage2,
    openImage: openImage2,
    closeImage: closeImage2,
    nextImage: nextImage2,
    prevImage: prevImage2,
  } = useImageViewer(cultural);
  const {
    selectedImage: selectedImage3,
    openImage: openImage3,
    closeImage: closeImage3,
    nextImage: nextImage3,
    prevImage: prevImage3,
  } = useImageViewer(graduation);

  return (
    <>
      <div className="gallery-div">
        <div className="banner">
          <div className="gallery">
            {imageLinks.map((item, index) => (
              <span key={index} style={{ "--i": index + 1 }}>
                <a href={`#${item.id}`}>
                  <img src={item.src} alt={`Go to ${item.id}`} />
                  <div className="caption">{item.title}</div>
                </a>
              </span>
            ))}
          </div>
          <br />
          <br />
          <SectionHeading
            text1="Welcome to our"
            text2="gallery"
            color1="#fff"
          />
          <a href="#galaxy">
            Jump right in{" "}
            <span>
              <TbHandFingerDown />
            </span>
          </a>
        </div>
        <div id="galaxy" />
        <h1 className="offset-md-1" id="about-section">
          Cultural Day
        </h1>

        <div className="gallery-sections col-md-10 offset-md-1">
          <div id="mz-gallery-container">
            <div id="mz-gallery">
              {casual.map((image, index) => (
                <figure key={index} onClick={() => openImage(index)}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    width="700"
                    height="700"
                  />
                  <figcaption>
                    <h6>Zoom</h6>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          {selectedImage && (
            <div className="lightbox" onClick={closeImage}>
              <div
                className="lightbox-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  &#10094;
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="zoomed"
                />
                <button
                  className="next"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  &#10095;
                </button>
              </div>
            </div>
          )}
        </div>

        <h1 className="offset-md-1" id="academics-section">
          Cultural Day
        </h1>
        <div className="gallery-sections col-md-10 offset-md-1">
          <div id="mz-gallery-container">
            <div id="mz-gallery">
              {cultural.map((img, index2) => (
                <figure key={index2} onClick={() => openImage2(index2)}>
                  <img src={img.src} alt={img.alt} width="700" height="700" />
                  <figcaption>
                    <h6>Zoom</h6>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          {selectedImage2 && (
            <div className="lightbox" onClick={closeImage2}>
              <div
                className="lightbox-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage2();
                  }}
                >
                  &#10094;
                </button>
                <img
                  src={selectedImage2.src}
                  alt={selectedImage2.alt}
                  className="zoomed"
                />
                <button
                  className="next"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage2();
                  }}
                >
                  &#10095;
                </button>
              </div>
            </div>
          )}
        </div>
        <h1 className="offset-md-1" id="academics-section">
          Graduation Day
        </h1>
        <div className="gallery-sections col-md-10 offset-md-1">
          <div id="mz-gallery-container">
            <div id="mz-gallery">
              {graduation.map((img, index2) => (
                <figure key={index2} onClick={() => openImage3(index2)}>
                  <img src={img.src} alt={img.alt} width="700" height="700" />
                  <figcaption>
                    <h6>Zoom</h6>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          {selectedImage3 && (
            <div className="lightbox" onClick={closeImage3}>
              <div
                className="lightbox-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage3();
                  }}
                >
                  &#10094;
                </button>
                <img
                  src={selectedImage3.src}
                  alt={selectedImage3.alt}
                  className="zoomed"
                />
                <button
                  className="next"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage3();
                  }}
                >
                  &#10095;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
