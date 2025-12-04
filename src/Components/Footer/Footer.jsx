import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="row">
          <div className="col-md-4">
            <div className="inner p-5">
              <div className="text-center bg-transparent text-white">
                <h3 className="text-uppercase">location</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="inner p-5">
              <div className=" text-center bg-transparent text-white">
                <h3 className="text-uppercase">around the web</h3>
                <div className="social">
                  <i className="social-icon fa-brands fa-facebook m-3"></i>
                  <i className="social-icon fa-brands fa-twitter m-3"></i>
                  <i className="social-icon fa-brands fa-linkedin m-3"></i>
                  <i className="social-icon fa-solid fa-globe m-3"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="inner p-5">
              <div className="text-center bg-transparent text-white">
                <h3 className="text-uppercase">ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer text-white text-center py-3">
            <p>Copyright &copy; Your Website 2025</p>
        </div>
      </footer>
      <></>
    </>
  );
}
