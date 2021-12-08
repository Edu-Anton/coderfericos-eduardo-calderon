import React from "react";

export default function Loader() {
  return (
    <div className="col-12 mt-5 text-center">
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}
