import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser, getUser } from "../redux/userReducer";
import axios from "axios";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Hamburger from "../images/icons8-hamburger-64.png";

function Nav(props) {
  useEffect(() => {
    getUser();
  }, []);

  const logout = () => {
    axios.delete("/logout").then(() => {
      props.history.push("/");
    });
  };

  return (
    <nav
      style={{
        backgroundColor: "blue",
        display: "flex",
        justifyContent: "space-between",
        height: "75px",
        alignItems: "center",
      }}
    >
      <img src={Hamburger} alt="hamburger" style={{ marginLeft: "10px" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "50%",
        }}
      >
        <Link to="/Dashboard">
          <h1>Dashboard</h1>
        </Link>
        <Link to={`/Profile/${props.user.user.id}`}>
          <h1>Profile</h1>
        </Link>
        <Link to="/Episodes">
          <h1>Episodes</h1>
        </Link>
      </div>
      <Button
        variant="contained"
        color="secondary"
        endIcon={<ExitToAppIcon />}
        onClick={logout}
        style={{ marginRight: "20px" }}
      >
        Logout
      </Button>
    </nav>
  );
}

const mapStateToProps = (reduxState) => reduxState;

export default withRouter(
  connect(mapStateToProps, { logoutUser, getUser })(Nav)
);
