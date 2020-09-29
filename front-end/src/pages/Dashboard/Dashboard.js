import React from "react";
import "./Dashboard.scss";
import Background from "../../images/androids-dungeon-bg.png";
import Card from "@material-ui/core/Card";
import { Link, withRouter } from "react-router-dom";
import { logoutUser, getUser } from "../../redux/userReducer";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import axios from "axios";

function Dashboard(props) {
  const logout = () => {
    axios.delete("/logout").then(() => {
      props.history.push("/");
    });
  };

  return (
    <div
      className="dashboard-main"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="title-div">
        <h1 className="dashboard-title">The Android's Dungeon</h1>
        <Button
          variant="contained"
          color="secondary"
          endIcon={<ExitToAppIcon />}
          onClick={logout}
          id="dashboard-logout-button"
        >
          Logout
        </Button>
      </div>
      <div className="dashboard-card-div">
        <div className="card-div-row">
          <Card
            id="dashboard-card-top"
            className="dashboard-main"
            style={{ backgroundImage: `url(${Background})` }}
          >
            <Link
              to={`/profile/${props.user.info.username}`}
              className="dashboard-link"
            >
              <h1 className="top-div-title">My Profile</h1>
            </Link>
          </Card>
          <Card
            id="dashboard-card-top"
            className="dashboard-main"
            style={{ backgroundImage: `url(${Background})` }}
          >
            <Link to={`/episodes`} className="dashboard-link">
              <h1 className="top-div-title">Episodes</h1>
            </Link>
          </Card>
        </div>
        <div className="card-div-row">
          <Card
            id="dashboard-card-bottom"
            className="dashboard-main"
            style={{ backgroundImage: `url(${Background})` }}
          >
            <Link to={`/characters`} className="dashboard-link">
              <h1 className="bottom-div-title">Characters</h1>
            </Link>
          </Card>
          <Card
            id="dashboard-card-bottom"
            className="dashboard-main"
            style={{ backgroundImage: `url(${Background})` }}
          >
            <Link to={`/trivia`} className="dashboard-link">
              <h1 className="bottom-div-title">Trivia</h1>
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
