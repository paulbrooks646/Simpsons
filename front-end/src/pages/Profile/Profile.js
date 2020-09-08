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
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import SnackbarComponent from "../../shared/Snackbar";
import "./Profile.scss";

function Profile(props) {
  const [pic, setPic] = useState(
    "https://www.clipartkey.com/mpngs/m/29-297748_round-profile-image-placeholder.png"
  );
  const [updatingProfile, setUpdatingProfile] = useState(false);
  const [updatedUsername, setUpdatedUsername] = useState(
    props.user.info.username || ""
  );
  const [updatedEmail, setUpdatedEmail] = useState(props.user.info.email || "");
  const [updatedPic, setUpdatedPic] = useState(
    props.user.info.profile_pic || ""
  );
  const [snackbarIsOpen, setSnackbarIsOpen] = useState(false);

  useEffect(() => {
    getUser();
    if (props.user.info.profile_pic) {
      setPic(props.user.info.profile_pic);
    }
  }, [props.user.info.profile_pic]);

  const handleOpenUpdatingProfile = () => setUpdatingProfile(true);
  const handleCloseUpdatingProfile = () => setUpdatingProfile(false);
  const handleCloseSnackbar = () => setSnackbarIsOpen(false);

  const handleUpdate = () => {
    axios
      .put(`/Update/${props.user.info.id}`, {
        updatedUsername,
        updatedEmail,
        updatedPic,
      })
      .then(() => {
        setUpdatingProfile(false);
        setSnackbarIsOpen(true);
      });
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
          <Fab color="primary" onClick={handleOpenUpdatingProfile}>
            <EditIcon />
          </Fab>
        </Tooltip>
        <Dialog
          open={updatingProfile}
          onClose={handleCloseUpdatingProfile}
          aria-labelledby="update-profile-dialog-title"
        >
          <DialogTitle id="update-profile-dialog-title">
            Update Profile
          </DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              margin="dense"
              label="Change Username"
              value={updatedUsername}
              type="text"
              onChange={(event) => setUpdatedUsername(event.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              margin="dense"
              label="Change Email"
              type="email"
              value={updatedEmail}
              onChange={(event) => setUpdatedEmail(event.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              margin="dense"
              label="Change Profile Picture"
              value={updatedPic}
              type="text"
              onChange={(event) => setUpdatedPic(event.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountBoxIcon />
                  </InputAdornment>
                ),
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button color="secondary" onClick={handleCloseUpdatingProfile}>
              Cancel
            </Button>
            <Button color="primary" onClick={handleUpdate}>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <SnackbarComponent
        vertical="bottom"
        horizontal="center"
        open={snackbarIsOpen}
        onClose={handleCloseSnackbar}
        message="Profile Updated!"
      />
    </Page>
  );
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { getUser })(Profile);
