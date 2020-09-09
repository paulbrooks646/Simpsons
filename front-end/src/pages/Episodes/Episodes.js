import React, { useEffect } from "react";
import Page from "../../components/Page";
import "./Episodes.scss";
import axios from "axios";
import { getEpisodes } from "../../redux/episodesReducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Episodes(props) {
  const { getEpisodes } = props;

  useEffect(() => {
    axios.get("/episodes").then((res) => {
      getEpisodes(res.data);
    });
  }, [getEpisodes]);

  const episodes = props.episodes.info.map((e, index) => {
    return (
      <Link to={`/episodes/${e.episode_name}`}>
        <div key={index} className="episodes-episode">
          <h1>{e.episode_name}</h1>
          <img src={e.episode_image} alt="simpsons" />
          <h6>{e.episode_synopsis}</h6>
        </div>
      </Link>
    );
  });

  return (
    <Page>
      <div className="episode-main">{episodes}</div>
    </Page>
  );
}

const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps, { getEpisodes })(Episodes);
