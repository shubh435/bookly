import React from "react";
import { loaderImg } from "../assets";

function Loader() {
  return (
    <div className="loader-container">
      <img src={loaderImg} alt="Loading ..." />
    </div>
  );
}

export default Loader;
