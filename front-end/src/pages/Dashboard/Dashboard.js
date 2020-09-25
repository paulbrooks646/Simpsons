import React from "react";
import "./Dashboard.scss";
import Background from "../../images/androids-dungeon-bg.png";
import Card from "@material-ui/core/Card";
import { Link, withRouter } from "react-router-dom";
import { logoutUser, getUser } from "../../redux/userReducer";
import { connect } from "react-redux";

function Dashboard(props) {
  return (
    <div
      className="dashboard-main"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <h1 className="dashboard-title">The Android's Dungeon</h1>
      <div className="dashboard-card-div">
        <div className="top-div-cards">
          <Card
            id="dashboard-card-top"
            className="dashboard-main"
            style={{ backgroundImage: `url(${Background})` }}
          >
            <Link
              to={`/profile/${props.user.info.username}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <h1
                style={{
                  border: "solid",
                  width: "180px",
                  position: "relative",
                  top: "25px",
                }}
              >
                Profile
              </h1>
            </Link>
          </Card>
          <Card
            id="dashboard-card-top"
            className="dashboard-main"
            style={{ backgroundImage: `url(${Background})` }}
          >
            <Link
              to={`/episodes`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <h1
                style={{
                  border: "solid",
                  width: "180px",
                  position: "relative",
                  top: "25px",
                }}
              >
                Episodes
              </h1>
            </Link>
          </Card>
        </div>
        <div className="bottom-div-cards">
          <Card
            id="dashboard-card-bottom"
            className="dashboard-main"
            style={{ backgroundImage: `url(${Background})` }}
          >
            <Link
              to={`/characters`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <h1
                style={{
                  border: "solid",
                  width: "180px",
                  position: "relative",
                  top: "60px",
                }}
              >
                Characters
              </h1>
            </Link>
          </Card>
          <Card
            id="dashboard-card-bottom"
            className="dashboard-main"
            style={{ backgroundImage: `url(${Background})` }}
          >
            <Link
              to={`/trivia`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <h1
                style={{
                  border: "solid",
                  width: "180px",
                  position: "relative",
                  top: "60px",
                }}
              >
                Trivia
              </h1>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (reduxState) => reduxState;

export default withRouter(
  connect(mapStateToProps, { logoutUser, getUser })(Dashboard)
);