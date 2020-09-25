import React from "react";
import "./Dashboard.scss";
import Background from "../../images/androids-dungeon-bg.png";
import Card from "@material-ui/core/Card";

export default function Dashboard(props) {
  return (
    <div
      className="dashboard-main"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <h1 className="dashboard-title">The Android's Dungeon</h1>
      <div className="dashboard-card-div">
        <div className="top-div-cards">
          <Card
            id="dashboard-card"
            className="dashboard-main"
            style={{ backgroundImage: `url(${Background})` }}
          ></Card>
          <Card
            id="dashboard-card"
            className="dashboard-main"
            style={{ backgroundImage: `url(${Background})` }}
          ></Card>
        </div>
        <div className="bottom-div-cards">
          <Card
            id="dashboard-card"
            className="dashboard-main"
            style={{ backgroundImage: `url(${Background})` }}
          ></Card>
          <Card
            id="dashboard-card"
            className="dashboard-main"
            style={{ backgroundImage: `url(${Background})` }}
          ></Card>
        </div>
      </div>
    </div>
  );
}
