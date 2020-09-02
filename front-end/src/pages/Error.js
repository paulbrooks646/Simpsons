import React from "react";
import { Link } from "react-router-dom";

import "./Error.scss";
import comicBookGuy from "../images/comic-book-guy.png";

export default function Error() {
  return (
    <div className="error-wrapper">
      <img src={comicBookGuy} alt="Comic Book Guy" />
      <h2> Worst Error Page Ever!!!</h2>
      <Link to="/dashboard">Return To Dashboard</Link>
    </div>
  );
}
