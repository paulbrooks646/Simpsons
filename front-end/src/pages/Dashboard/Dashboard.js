import React from "react";
import Page from "../../components/Page";
import "./Dashboard.scss";
import Background from "../../images/androids-dungeon-bg.png"
import Card from "@material-ui/core/Card";


export default function Dashboard(props) {
  return (
    <Page>
      <div className="dashboard-main" style={{backgroundImage: `url(${Background})`}}>
          <h1 className="dashboard-title">Welcome to The Android's Dungeon</h1>
      <div>
        <Card variant="outlined" className="character-card">Homer Simpson</Card>
      </div>
      </div>
    </Page>
  );
}
