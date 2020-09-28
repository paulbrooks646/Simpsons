import React from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { logoutUser, getUser } from "../../redux/userReducer";
import "./Dashboard.scss";

function Dashboard(props) {
  const logout = () => {
    axios.delete("/logout").then(() => {
      props.history.push("/");
    });
  };

  return (
    <div className="dashboard-main">
      <div className="title-div">
        <h1 className="dashboard-title">The Android's Dungeon</h1>
        <Button
          variant="contained"
          color="secondary"
          endIcon={<ExitToAppIcon />}
          onClick={logout}
          className="dashboard-logout-button"
        >
          Logout
        </Button>
      </div>
      <div className="dashboard-card-div">
        <div className="top-div-cards">
          <Card id="dashboard-card-top" className="dashboard-main">
            <Link
              to={`/profile/${props.user.info.username}`}
              className="dashboard-card-link"
            >
              <h1 className="dashboard-card-link-header">My Profile</h1>
            </Link>
          </Card>
          <Card id="dashboard-card-top" className="dashboard-main">
            <Link to={`/episodes`} className="dashboard-card-link">
              <h1 className="dashboard-card-link-header">Episodes</h1>
            </Link>
          </Card>
        </div>
        <div className="bottom-div-cards">
          <Card id="dashboard-card-bottom" className="dashboard-main">
            <Link to={`/characters`} className="dashboard-card-link">
              <h1 className="dashboard-card-link-header">Characters</h1>
            </Link>
          </Card>
          <Card id="dashboard-card-bottom" className="dashboard-main">
            <Link to={`/trivia`} className="dashboard-card-link">
              <h1 className="dashboard-card-link-header">Trivia</h1>
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
