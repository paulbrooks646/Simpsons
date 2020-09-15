import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "./Profile.scss";

function Profile(props) {
  const { id, username, email, profile_pic } = props.user.info;
  const [pic, setPic] = useState(
    "https://realsic.com/wp-content/uploads/2016/11/donut-enamel-pin-simpsons-donut-pin-by-real-sic-pink-4-1.jpg"
  );
  const [updatingProfile, setUpdatingProfile] = useState(false);
  const [updatedUsername, setUpdatedUsername] = useState(username || "");
  const [updatedEmail, setUpdatedEmail] = useState(email || "");
  const [updatedPic, setUpdatedPic] = useState(profile_pic || "");
  const [snackbarIsOpen, setSnackbarIsOpen] = useState(false);
  const [watchlist, setWatchlist] = useState([]);
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    getUser();
    if (profile_pic) {
      setPic(profile_pic);
      axios.get(`/watchlist/${props.user.info.id}`).then((res) => {
        setWatchlist(res.data);
      });
       axios.get(`/favorites/${props.user.info.id}`).then((res) => {
         setFavorites(res.data);
       });
    }
  }, [profile_pic, props.user.info.id]);

  const handleOpenUpdatingProfile = () => setUpdatingProfile(true);
  const handleCloseUpdatingProfile = () => setUpdatingProfile(false);
  const handleCloseSnackbar = () => setSnackbarIsOpen(false);

  const handleUpdate = () => {
    axios
      .put(`/Update/${id}`, {
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
        <div className="profile-information">
          <img className="profile-image" src={pic} alt={username} />
          <h1>{username}</h1>
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
        </div>
        <div className="profile-main">
          <div>
            <h1>Your Watchlist</h1>
            <List>
              {watchlist.map((episode) => (
                <ListItem
                  button
                  key={episode.watchlist_id}
                  component={Link}
                  to={`/episodes/${episode.episode_name.replace(/ /g, "_")}`}
                >
                  <ListItemText primary={episode.episode_name} />
                </ListItem>
              ))}
            </List>
          </div>
          <div>
            <h1>Favorites</h1>
          </div>
        </div>
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
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={snackbarIsOpen}
        onClose={handleCloseSnackbar}
        autoHideDuration={5000}
      >
        <Alert onClose={handleCloseSnackbar} variant="filled" severity="info">
          Profile Updated
        </Alert>
      </Snackbar>
    </Page>
  );
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { getUser })(Profile);
