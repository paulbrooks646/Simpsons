import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "200px",
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/en/7/79/The_Simpsons-Jeff_Albertson.png"
        alt="Comic Book Guy"
      />
      <h2> Worst Error Page Ever!!!</h2>
      <Link to="/dashboard">Return To Dashboard</Link>
    </div>
  );
}
