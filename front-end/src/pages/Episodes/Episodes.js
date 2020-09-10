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

function Episodes(props) {
  const { getEpisodes } = props;
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get("/episodes").then((res) => {
      getEpisodes(res.data);
    });
  }, [getEpisodes]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const episodes = props.episodes.info.map((e, index) => {
    if (e.season === page) {
      return (
        <Link
          key={index}
          to={`/episodes/${e.episode_name.replace(/ /g, "_")}`}
          style={{ textDecoration: "none" }}
        >
          <Card variant="outlined" className="episodes-card">
            <div className="episodes-episode">
              <h1>{e.episode_name}</h1>
              <img src={e.episode_image} alt="simpsons" />
              <h6>{e.episode_synopsis}</h6>
            </div>
          </Card>
        </Link>
      );
    }
  });

  return (
    <Page>
      <div className="episode-main">{episodes}</div>
      <Typography style={{ textAlign: "center" }}>Season: {page}</Typography>
      <Pagination
        count={10}
        color="primary"
        page={page}
        onChange={handleChange}
        showFirstButton
        showLastButton
      />
    </Page>
  );
}

const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps, { getEpisodes })(Episodes);
