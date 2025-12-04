import React from "react";

export default function Notfound() {
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row mt-3">
          <div className="col-md-12">
            <div className="inner-error">
              <h1 className="text-center alert alert-danger mt-5">
                Not found 404
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
