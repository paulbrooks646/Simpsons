import React, { useEffect, useState } from "react";
import { Link as RouterLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser, getUser } from "../../redux/userReducer";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import Drawer from "@material-ui/core/Drawer";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Hamburger from "../../images/icons8-hamburger-64.png";
import placeholderProfilePic from "../../images/placeholder-profile-pic.jpg";
import "./Nav.scss";

function Nav(props) {
  const [hamburger, setHamburger] = useState(false);
  const [avatar, setAvatar] = useState(placeholderProfilePic);

  useEffect(() => {
    getUser();
    if (props.user.info.profile_pic) {
      setAvatar(props.user.info.profile_pic);
    }
  }, [props.user.info.profile_pic]);

  const closeSideDrawer = () => setHamburger(false);
  const openSideDrawer = () => setHamburger(true);

  const logout = () => {
    axios.delete("/logout").then(() => {
      props.history.push("/");
    });
  };

  return (
    <>
      <nav className="navbar">
        <div className="hamburger-div">
          <img
            src={Hamburger}
            alt="hamburger"
            className="hamburger"
            onClick={openSideDrawer}
          />
          <Drawer anchor="left" open={hamburger} onClose={closeSideDrawer}>
            <div className="drawer-content">
              <Link to="/dashboard" component={RouterLink}>
                <h2>Dashboard</h2>
              </Link>
              <Link
                to={`/profile/${props.user.info.username}`}
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
              <Link to="/episodes" component={RouterLink}>
                <h2>Episodes</h2>
              </Link>
              <Link to="/characters" component={RouterLink}>
                <h2>Characters</h2>
              </Link>
              <Link to="/trivia" component={RouterLink}>
                <h2>Trivia</h2>
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
          </Drawer>
        </div>
        <div className="nav-middle-div">
          <Link to="/dashboard" component={RouterLink}>
            <h1>Dashboard</h1>
          </Link>
          <Link
            to={`/profile/${props.user.info.username}`}
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
          <Link to="/episodes" component={RouterLink}>
            <h1>Episodes</h1>
          </Link>
          <Link to="/characters" component={RouterLink}>
            <h1>Characters</h1>
          </Link>
          <Link to="/trivia" component={RouterLink}>
            <h1>Trivia</h1>
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
