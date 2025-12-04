import React from "react";
import avtar from "../../assets/avataaars.svg"


export default function Home() {
  return (
    <>
      <section className="home min-vh-100 d-flex justify-content-center align-items-center text-white mt-5">
        <div className="text-center">
          <img src={avtar} alt="Avtar" className="w-75" />
          <h2 className="fs-1 fw-bold text-uppercase mb-3">start framework</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3"></div>
          </div>
          <span>Graphic Artist - Web Designer - Illustrator</span>
        </div>
      </section>
    </>
  );
}
