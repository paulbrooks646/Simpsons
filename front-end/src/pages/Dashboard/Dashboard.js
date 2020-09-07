import React from "react";
import Page from "../../components/Page";
import "./Dashboard.scss";
import Background from "../../images/androids-dungeon-bg.png"


export default function Dashboard(props) {
  return (
    <Page>
      <div className="dashboard-main" style={{backgroundImage: `url(${Background})`}}>
        <div className="dashboard-title-div">
          <h1 className="dashboard-title">Welcome to The Android's Dungeon</h1>
        </div>
      </div>
    </Page>
  );
}
