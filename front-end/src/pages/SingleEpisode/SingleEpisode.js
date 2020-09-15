import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUser } from "../../redux/userReducer";
import Page from "../../components/Page";
import "./SingleEpisode.scss";
import axios from "axios";
import formatDate from "../../util/formatDate";
import Card from "@material-ui/core/Card";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Rating from "@material-ui/lab/Rating";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import AddToQueueIcon from "@material-ui/icons/AddToQueue";
import RemoveFromQueueIcon from "@material-ui/icons/RemoveFromQueue";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";

function SingleEpisode(props) {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isRating, setIsRating] = useState(false);
  const [rating, setRating] = useState();
  const [review, setReview] = useState("");
  const [snackbarIsOpen, setSnackbarIsOpen] = useState(false);
  const [userWatchlist, setUserWatchlist] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const episode = props.match.params.episode.replace(/_/g, " ");
    const fetchData = async () => {
      const getEpisode = await axios.get(`/episode/${episode}`);
      const getUserWatchlist = await axios.get(
        `/watchlist/${props.user.info.id}`
      );
      const getFavorites = await axios.get(`/favorites/${props.user.info.id}`);
      setInfo(getEpisode.data[0]);
      setUserWatchlist(getUserWatchlist.data);
      setFavorites(getFavorites.data);
      setLoading(false);
    };
    fetchData();
  }, [props.match.params.episode, props.user.info.id]);

  const handleOpenDialog = () => setIsRating(true);
  const handleCloseDialog = () => setIsRating(false);
  const handleSnackbarClose = () => setSnackbarIsOpen(false);

  const submitRatingAndReview = () => {
    const data = { rating, review, episode_name: info.episode_name };
    axios.put(`/rating-review/${props.user.info.id}`, data).then(() => {
      handleCloseDialog();
      setSnackbarIsOpen(true);
    });
  };

  const addToWatchlist = () => {
    const episode_name = info.episode_name;
    axios.post(`/watchlist/${props.user.info.id}`, { episode_name });
  };

  const removeFromWatchlist = () => {
    const episode_name = info.episode_name;
    axios.delete(`/watchlist/${episode_name}`);
  };

  const addToFavorites = () => {
    const episode_name = info.episode_name;
    axios.post(`/favorites/${props.user.info.id}`, { episode_name });
  };

  const removeFromFavorites = () => {
    const episode_name = info.episode_name;
    axios.delete(`/favorites/${episode_name}`);
  };

  return (
    <Page>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="episode-main">
          <Card variant="outlined" className="episode-card">
            <div className="episode-div">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  width: "100%",
                }}
              >
                <h2>{info.episode_name}</h2>
                {userWatchlist
                  .map((episode) => episode.episode_name)
                  .includes(info.episode_name) ? (
                  <Tooltip title="Remove From Watchlist">
                    <IconButton color="secondary" onClick={removeFromWatchlist}>
                      <RemoveFromQueueIcon />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip title="Add To Watchlist">
                    <IconButton color="primary" onClick={addToWatchlist}>
                      <AddToQueueIcon />
                    </IconButton>
                  </Tooltip>
                )}
                {favorites
                  .map((episode) => episode.episode_name)
                  .includes(info.episode_name) ? (
                  <Tooltip title="Remove From Favorites">
                    <IconButton onClick={removeFromFavorites}>
                      <FavoriteIcon className="favorite-icon" />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip title="Add To Favorites">
                    <IconButton onClick={addToFavorites}>
                      <FavoriteBorderIcon className="favorite-border-icon" />
                    </IconButton>
                  </Tooltip>
                )}
              </div>
              <h3>Rating: {info.rating}</h3>
              <Rating
                name="average-rating"
                value={+info.rating}
                precision={0.1}
                size="large"
                readOnly
              />
              <img src={info.episode_image} alt={info.episode_name} />
              <p>{info.episode_synopsis}</p>
              <h2>Air Date: {formatDate(info.air_date)}</h2>
              <p>{info.episode_quote}</p>
              <h2>Season: {info.season}</h2>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleOpenDialog}
              >
                Rate this episode!
              </Button>
            </div>
            <List style={{ width: "100%" }}>
              {info.reviews.map((item, index) => {
                const [starRating, reviewText, reviewer, reviewerImage] = item;
                return (
                  <ListItem alignItems="flex-start" key={index}>
                    <ListItemAvatar>
                      <Avatar src={reviewerImage} alt={reviewer} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <>
                          {reviewer} rated it{" "}
                          <Rating
                            value={starRating}
                            readOnly
                            size="small"
                            precision={0.5}
                          />
                        </>
                      }
                      secondary={reviewText}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Card>
          <Dialog
            open={isRating}
            fullWidth
            disableBackdropClick
            onClose={handleCloseDialog}
            aria-labelledby="dialog-rating-title"
          >
            <DialogTitle id="dialog-rating-title" style={{ paddingBottom: 0 }}>
              Rate this episode ({info.episode_name})
            </DialogTitle>
            <DialogContent>
              <Rating
                name="episode-star-rating-input"
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
                precision={0.5}
                defaultValue={0}
                size="large"
                style={{ marginBottom: "20px" }}
                onChange={(e) => setRating(e.target.value)}
                value={rating}
              />
              <TextField
                label="Write review here"
                multiline
                rows={8}
                variant="outlined"
                fullWidth
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleCloseDialog}
              >
                Close
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={submitRatingAndReview}
              >
                Submit
              </Button>
            </DialogActions>
          </Dialog>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={snackbarIsOpen}
            autoHideDuration={4000}
            onClose={handleSnackbarClose}
          >
            <Alert
              onClose={handleSnackbarClose}
              variant="filled"
              severity="success"
            >
              RATING AND REVIEW SUBMITTED!
            </Alert>
          </Snackbar>
        </div>
      )}
    </Page>
  );
}

const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps, { getUser })(SingleEpisode);
