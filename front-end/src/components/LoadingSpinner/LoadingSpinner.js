import React from "react";
import loading from "../../images/loading.gif";
import "./LoadingSpinner.scss";

const LoadingSpinner = () => (
  <div className="loading-spinner-wrapper">
    <img src={loading} alt="loading" />
  </div>
);

export default LoadingSpinner;
