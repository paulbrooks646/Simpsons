import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser, getUser } from "../redux/userReducer";
import axios from "axios";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Hamburger from "../images/icons8-hamburger-64.png";
import "./Nav.scss";
import ToolTip from '@material-ui/core/ToolTip'
import Zoom from '@material-ui/core/Zoom'

function Nav(props) {
  const [hamburger, setHamburger] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };

  const logout = () => {
    axios.delete("/logout").then(() => {
      props.history.push("/");
    });
  };

  return (
    <>
      <nav>
        <div className="hamburger-div">
          <ToolTip
            title="Toggle Menu"
            placement="right"
            TransitionComponent={Zoom}
            arrow
          >
            <img
              src={Hamburger}
              alt="hamburger"
              className="hamburger"
              onClick={toggleHamburger}
            />
          </ToolTip>
          <div
            className={`${
              hamburger ? "hamburger-menu" : "hamburger-menu-open"
            }`}
          >
            <Link to="/Dashboard">
              <h2>Dashboard</h2>
            </Link>
            <Link to={`/Profile/${props.user.user_id}`}>
              <h2>Profile</h2>
            </Link>
            <Link to="/Episodes">
              <h2>Episodes</h2>
            </Link>
            <Button
              variant="contained"
              color="secondary"
              endIcon={<ExitToAppIcon />}
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        </div>
        <div className="nav-middle-div">
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
          id="nav-button-wide"
        >
          Logout
        </Button>
      </nav>
    </>
  );
}

const mapStateToProps = (reduxState) => reduxState;

export default withRouter(
  connect(mapStateToProps, { logoutUser, getUser })(Nav)
);
