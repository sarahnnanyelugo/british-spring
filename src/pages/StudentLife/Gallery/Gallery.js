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

const images = [
  { src: "https://picsum.photos/id/818/700/700", alt: "Statue of Liberty" },
  { src: "https://picsum.photos/id/537/700/700", alt: "Night Sky" },
  { src: "https://picsum.photos/id/136/700/700", alt: "Ravine Between Rocks" },
  { src: "https://picsum.photos/id/337/700/700", alt: "Wheat Farm" },
  { src: "https://picsum.photos/id/737/700/700", alt: "City Street" },
  { src: "https://picsum.photos/id/217/700/700", alt: "Crumbling Pier" },
  { src: "https://picsum.photos/id/416/700/700", alt: "Foggy Mountains" },
  { src: "https://picsum.photos/id/811/700/700", alt: "Dense Forest" },
  { src: "https://picsum.photos/id/902/700/700", alt: "Sunset Over Mountains" },
  {
    src: "https://picsum.photos/id/514/700/700",
    alt: "SUV in Front of Building",
  },
];
const graduation = [
  { src: "https://picsum.photos/id/818/700/700", alt: "Statue of Liberty" },
  { src: "https://picsum.photos/id/537/700/700", alt: "Night Sky" },
  { src: "https://picsum.photos/id/136/700/700", alt: "Ravine Between Rocks" },
  { src: "https://picsum.photos/id/337/700/700", alt: "Wheat Farm" },
  { src: "https://picsum.photos/id/737/700/700", alt: "City Street" },
  { src: "https://picsum.photos/id/217/700/700", alt: "Crumbling Pier" },
  { src: "https://picsum.photos/id/416/700/700", alt: "Foggy Mountains" },
  { src: "https://picsum.photos/id/811/700/700", alt: "Dense Forest" },
  { src: "https://picsum.photos/id/902/700/700", alt: "Sunset Over Mountains" },
  {
    src: "https://picsum.photos/id/514/700/700",
    alt: "SUV in Front of Building",
  },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };
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
          <a href="#gallery-photos">
            Jump right in{" "}
            <span>
              <TbHandFingerDown />
            </span>
          </a>
        </div>
        <h1 className="offset-md-1" id="about-section">
          Cultural Day
        </h1>

        <div className="gallery-sections col-md-10 offset-md-1">
          <div id="mz-gallery-container">
            <div id="mz-gallery">
              {images.map((image, index) => (
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
          Graduation
        </h1>
        <div className="gallery-sections col-md-10 offset-md-1">
          <div id="mz-gallery-container">
            <div id="mz-gallery">
              {graduation.map((image, index) => (
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
      </div>
    </>
  );
};
