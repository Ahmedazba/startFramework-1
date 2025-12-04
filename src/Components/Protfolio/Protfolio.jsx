import React, { useState } from "react";
import home from "../../assets/poert1.png";
import cake from "../../assets/port2.png";
import ser from "../../assets/port3.png";
import "./protfolio.css";

export default function Protfolio() {
  const [showDetails, setShowDetails] = useState(false);
  const [imgCurrent, setImgCurrent] = useState(null);


  function Open(img) {
    setShowDetails(true);
    setImgCurrent(img);
  }

  function close() {
    setShowDetails(false)
  }
  return (
    <>
      <section className=" pt-5 mt-5 position-relative">
        <div className="mt-5">
          <h2 className=" text-center text-bg-secondary-emphasis fs-1 fw-bold text-uppercase mb-3">
            protfolio component
          </h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line-contact me-3"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line-contact ms-3"></div>
          </div>

          <div className="container">
            <div className="row g-5 mb-5">
              <div className="col-md-4">
                <div
                  className="inner position-relative"
                  onClick={() => {
                    Open(home);
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <img src={home} alt="home" className="w-100 rounded" />
                  <div className="layout position-absolute w-100 h-100 rounded top-0 d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="inner position-relative"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  onClick={() => {
                    Open(cake);
                  }}
                >
                  <img src={cake} alt="cake" className="w-100 rounded" />
                  <div className="layout position-absolute w-100 h-100 rounded top-0 d-flex justify-content-center align-items-center bg-opacity-50">
                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="inner position-relative"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  onClick={() => {
                    Open(ser);
                  }}
                >
                  <img src={ser} alt="ser" className="w-100 rounded" />
                  <div className="layout position-absolute w-100 h-100 rounded top-0 d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="inner position-relative"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  onClick={() => {
                    Open(home);
                  }}
                >
                  <img src={home} alt="home" className="w-100 rounded" />
                  <div className="layout position-absolute w-100 h-100 rounded top-0 d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="inner position-relative"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  onClick={() => {
                    Open(cake);
                  }}
                >
                  <img src={cake} alt="cake" className="w-100 rounded" />
                  <div className="layout position-absolute w-100 h-100 rounded top-0 d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="inner position-relative"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  onClick={() => {
                    Open(ser);
                  }}
                >
                  <img src={ser} alt="ser" className="w-100 rounded" />
                  <div className="layout position-absolute w-100 h-100 rounded top-0 d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showDetails && (
          <div className="slide bg-opacity-50 position-fixed top-0 end-0 start-0 bottom-0 d-flex align-items-center justify-content-center z-2" onClick={close}>
            <div className="caption w-50" onClick={(e)=>{
              e.stopPropagation()
            }}>
              <img src={imgCurrent} alt="" className="w-100" />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
