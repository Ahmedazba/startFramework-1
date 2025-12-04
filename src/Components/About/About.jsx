import React from "react";

export default function About() {
  return (
    <>
      <div className="about min-vh-100 d-flex justify-content-center align-items-center text-white mt-5">
        <div className="">
          <h2 className=" text-center fs-1 fw-bold text-uppercase mb-3">about component</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3"></div>
          </div>
          <div className="container">
            <div className="row px-5">
              <div className="col-md-6 ps-md-5">
                <div className="inner">
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>
              <div className="col-md-6 pe-md-5">
                <div className="inner">
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
