import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUser } from "../../redux/userReducer";
import Page from "../../components/Page";
import "./SingleEpisode.scss";
import axios from "axios";
import formatDate from "../../util/formatDate";
import Card from "@material-ui/core/Card";
import LoadingSpinner from "../../shared/LoadingSpinner";
import Rating from "@material-ui/lab/Rating";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import TextField from "@material-ui/core/TextField";

function SingleEpisode(props) {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isRating, setIsRating] = useState(false);
  const [rating, setRating] = useState();
  const [review, setReview] = useState("");

  useEffect(() => {
    const episode = props.match.params.episode.replace(/_/g, " ");
    axios.get(`/episode/${episode}`).then((res) => {
      setInfo(res.data[0]);
      setLoading(false);
    });
  }, [props.match.params.episode]);

  // const toggleRating = () => setIsRating(!isRating);

  const handleOpenDialog = () => setIsRating(true);

  const handleCloseDialog = () => setIsRating(false);

  const submitRatingAndReview = () => {
    const data = { rating, review, episode_name: info.episode_name };
    axios.put(`/review/${props.user.info.id}`, data).then(() => {
      alert("review posted");
    });
  };

  return (
    <Page>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="episode-main">
          <Card variant="outlined" className="episode-card">
            <div className="episode-div">
              <h2>{info.episode_name}</h2>
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
          </Card>
          <Dialog
            open={isRating}
            onClose={handleCloseDialog}
            aria-labelledby="dialog-rating-title"
          >
            <DialogTitle id="dialog-rating-title">
              Rate this episode ({info.episode_name})
            </DialogTitle>
            <DialogContent
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Rating
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
                rows={5}
                variant="outlined"
                fullWidth
                style={{ marginBottom: "20px" }}
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                color="secondary"
                onClick={submitRatingAndReview}
              >
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </Page>
  );
}

const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps, { getUser })(SingleEpisode);