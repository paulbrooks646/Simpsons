import React, { useEffect, useState } from "react";
import { Link as RouterLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser, getUser } from "../redux/userReducer";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Hamburger from "../images/icons8-hamburger-64.png";
import "./Nav.scss";

function Nav(props) {
  const [hamburger, setHamburger] = useState(false);
  const [avatar, setAvatar] = useState(
    "https://realsic.com/wp-content/uploads/2016/11/donut-enamel-pin-simpsons-donut-pin-by-real-sic-pink-4-1.jpg"
  );
  useEffect(() => {
    getUser();
    if (props.user.info.profile_pic) {
      setAvatar(props.user.info.profile_pic);
    }
  }, [props.user.info.profile_pic]);

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
          <img
            src={Hamburger}
            alt="hamburger"
            className="hamburger"
            onClick={toggleHamburger}
          />
          <div
            className={`${
              hamburger ? "hamburger-menu" : "hamburger-menu-open"
            }`}
          >
            <Link to="/Dashboard" component={RouterLink}>
              <h2>Dashboard</h2>
            </Link>
            <Link
              to={`/Profile/${props.user.info.username}`}
              component={RouterLink}
            >
              <h2 className="profile-link-heading">
                Profile{" "}
                <Avatar
                  className="profile-link-heading-avatar"
                  style={{ width: "25px", height: "25px" }}
                  alt={props.user.info.username}
                  src={avatar}
                />
              </h2>
            </Link>
            <Link to="/Episodes" component={RouterLink}>
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
          <Link to="/Dashboard" component={RouterLink}>
            <h1>Dashboard</h1>
          </Link>
          <Link
            to={`/Profile/${props.user.info.username}`}
            component={RouterLink}
          >
            <h1 className="profile-link-heading">
              Profile{" "}
              <Avatar
                className="profile-link-heading-avatar"
                style={{ width: "25px", height: "25px" }}
                alt={props.user.info.username}
                src={avatar}
              />
            </h1>
          </Link>
          <Link to="/Episodes" component={RouterLink}>
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
