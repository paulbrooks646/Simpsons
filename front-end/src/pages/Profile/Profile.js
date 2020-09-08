import React, { useEffect, useState } from "react";
import Page from "../../components/Page";
import { connect } from "react-redux";
import { getUser } from "../../redux/userReducer";
import axios from "axios";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import PersonIcon from "@material-ui/icons/Person";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import FormHelperText from "@material-ui/core/FormHelperText";
import "./Profile.scss";

function Profile(props) {
  const [pic, setPic] = useState(
    "https://www.clipartkey.com/mpngs/m/29-297748_round-profile-image-placeholder.png"
  );
  const [updateProfile, setUpdateProfile] = useState(false);
  const [updatedUsername, setUpdatedUsername] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedPassword, setUpdatedPasword] = useState("");
  const [confirmUpdatedPassword, setConfirmUpdatedPassword] = useState("");
  const [updatedPic, setUpdatedPic] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  useEffect(() => {
    getUser();
    if (props.user.info.profile_pic) {
      setPic(props.user.info.profile_pic);
    }
  }, [props.user.info.profile_pic]);

  const toggleUpdateProfile = () => setUpdateProfile(!updateProfile);

  const handleUpdate = () => {
    axios.put(`/Update/${props.user.info.id}`, {updatedUsername, updatedEmail, updatedPassword, updatedPic})
  };

  return (
    <Page>
      <div className="profile-content">
        <img
          className="profile-image"
          src={pic}
          alt={props.user.info.username}
        />
        <h1>{props.user.info.username}</h1>
        <Tooltip
          title="Edit Profile"
          placement="right"
          arrow
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <Fab color="primary" onClick={toggleUpdateProfile}>
            <EditIcon />
          </Fab>
        </Tooltip>

        <form onSubmit={handleUpdate} className="update-form">
          <div
            className={`${
              updateProfile ? "update-info" : "update-info-closed"
            }`}
          >
            <FormControl>
              <InputLabel htmlFor="newUsername">Change Username</InputLabel>
              <Input
                required
                value={updatedUsername}
                id="newUsername"
                placeholder="Enter new username"
                startAdornment={
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                }
                onChange={(e) => setUpdatedUsername(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="email">Change Email</InputLabel>
              <Input
                type="email"
                required
                value={updatedEmail}
                id="email"
                placeholder="Enter new email"
                startAdornment={
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                }
                onChange={(e) => setUpdatedEmail(e.target.value)}
              />
            </FormControl>
            <FormControl error={!passwordsMatch}>
              <InputLabel htmlFor="newPassword">Change Password</InputLabel>
              <Input
                required
                value={updatedPassword}
                aria-describedby="new-password-helper-text"
                id="newPassword"
                placeholder="Enter new password"
                error={!passwordsMatch}
                startAdornment={
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                }
                onChange={(e) => setUpdatedPasword(e.target.value)}
                type="password"
              />
              {!passwordsMatch && (
                <FormHelperText id="new-password-helper-text">
                  Passwords Do Not Match
                </FormHelperText>
              )}
            </FormControl>
            <FormControl error={!passwordsMatch}>
              <InputLabel htmlFor="confirmPassword">
                Confirm New Password
              </InputLabel>
              <Input
                required
                value={confirmUpdatedPassword}
                aria-describedby="confirm-password-helper-text"
                id="confirm"
                placeholder="Confirm new password"
                error={!passwordsMatch}
                startAdornment={
                  <InputAdornment position="start">
                    <VpnKeyIcon />
                  </InputAdornment>
                }
                onChange={(e) => setConfirmUpdatedPassword(e.target.value)}
                type="password"
              />
              {!passwordsMatch && (
                <FormHelperText id="confirm-password-helper-text">
                  Passwords Do Not Match
                </FormHelperText>
              )}
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="newProfilePic">
                Change Profile Pic
              </InputLabel>
              <Input
                required
                value={updatedPic}
                id="newProfilePic"
                placeholder="Profile Pic Url"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountBoxIcon />
                  </InputAdornment>
                }
                onChange={(e) => setUpdatedPic(e.target.value)}
              />
            </FormControl>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </Page>
  );
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { getUser })(Profile);
