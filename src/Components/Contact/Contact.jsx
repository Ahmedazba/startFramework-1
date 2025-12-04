import React, { useState } from "react";
import "./contact.css"

export default function Contact() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <>
      <div className="min-vh-100 pt-5 mt-5">
        <div className="mt-5">
          <h2 className=" text-center fs-1 fw-bold text-uppercase mb-3">
            contact section
          </h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line-contact me-3"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line-contact ms-3"></div>
          </div>

          <form className="w-50 p-3 mx-auto">
            <div className="custom-input my-4 pt-3">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="form-control border-0 border-bottom shadow-none"
              />
              <label className={userName ? "active" : ""}>userName :</label>
            </div>
            <div className="custom-input my-4 pt-3">
              <input
                type="text"
                value={userAge}
                onChange={(e) => setUserAge(e.target.value)}
                className="form-control border-0 border-bottom shadow-none"
              />
              <label className={userAge ? "active" : ""}>userAge :</label>
            </div>
            <div className="custom-input my-4 pt-3">
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="form-control border-0 border-bottom shadow-none"
              />
              <label className={userEmail ? "active" : ""}>userEmail :</label>
            </div>
            <div className="custom-input my-4 pt-3">
              <input
                type="password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                className="form-control border-0 border-bottom shadow-none"
              />
              <label className={userPassword ? "active" : ""}>userPassowrd :</label>
            </div>
            <button type="button" className="btn btn-success">send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}

