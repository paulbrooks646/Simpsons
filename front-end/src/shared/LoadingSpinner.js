import React from "react";
import loading from "../images/loading.gif";

const LoadingSpinner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "calc(100vh - 75px)",
    }}
  >
    <img src={loading} alt="loading" />
  </div>
);

export default LoadingSpinner;
