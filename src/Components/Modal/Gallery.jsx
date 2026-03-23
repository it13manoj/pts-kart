import { useState, useEffect } from "react";
import URL from "../config/API";

export default function Gallery({ showModal, setShowModal, sliderImg }) {

  const images = sliderImg?.map(
    (item) => `${URL.BASE_URL_IMAGE}/${item?.image}`
  ) || []; // ✅ Always array

  console.log(images);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Reset slider when modal opens
  useEffect(() => {
    if (showModal) {
      setCurrentIndex(0);
    }
  }, [showModal]);

  const closeModal = () => {
    setShowModal(false);
  };

  const nextSlide = () => {
    if (images.length === 0) return;

    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    if (images.length === 0) return;

    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  if (!showModal || images.length === 0) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button onClick={closeModal} style={closeBtn}>
          ✖
        </button>

        <button onClick={prevSlide} style={navBtnLeft}>
          ◀
        </button>

        <img
          src={images[currentIndex]}
          alt="slider"
          style={{ width: "100%", maxHeight: "738px" }}
        />

        <button onClick={nextSlide} style={navBtnRight}>
          ▶
        </button>
      </div>
    </div>
  );
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.8)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle = {
  position: "relative",
  width: "35%",
  background: "#fff",
  padding: "20px",
};

const closeBtn = {
  position: "absolute",
  top: "10px",
  right: "10px",
  cursor: "pointer",
};

const navBtnLeft = {
  position: "absolute",
  left: "10px",
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
};

const navBtnRight = {
  position: "absolute",
  right: "10px",
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
};