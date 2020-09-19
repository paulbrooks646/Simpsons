import React from "react";
import Page from "../../components/Page";
import "./Dashboard.scss";
import Background from "../../images/androids-dungeon-bg.png";


export default function Dashboard(props) {
  return (
    <Page>
      <div
        className="dashboard-main"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <h1 className="dashboard-title">Welcome to The Android's Dungeon</h1>
        <h2>This is by far the greatest website of all time!</h2>
      </div>
    </Page>
  );
}
