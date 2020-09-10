import React, { useEffect, useState } from "react";
import Page from "../../components/Page";
import "./Episodes.scss";
import axios from "axios";
import { getEpisodes } from "../../redux/episodesReducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";
import Card from "@material-ui/core/Card";
import LoadingSpinner from "../../shared/LoadingSpinner";

function Episodes(props) {
  const { getEpisodes } = props;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/episodes").then((res) => {
      getEpisodes(res.data);
      setLoading(false);
    });
  }, [getEpisodes]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const episodes = props.episodes.info.map((e, index) => {
    return (
      e.season === page && (
        <Link
          key={index}
          to={`/episodes/${e.episode_name.replace(/ /g, "_")}`}
          style={{ textDecoration: "none" }}
        >
          <Card variant="outlined" className="episodes-card">
            <div className="episodes-episode">
              <h5>{e.episode_name}</h5>
              <img
                src={e.episode_image}
                alt="simpsons"
                className="episodes-image"
              />
            </div>
          </Card>
        </Link>
      )
    );
  });

  return (
    <Page>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="episodes-main">{episodes}</div>
          <Typography style={{ textAlign: "center" }}>
            Season: {page}
          </Typography>
          <Pagination
            className="seasons-pagination"
            count={10}
            color="primary"
            page={page}
            onChange={handleChange}
            showFirstButton
            showLastButton
          />
        </>
      )}
    </Page>
  );
}

const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps, { getEpisodes })(Episodes);
