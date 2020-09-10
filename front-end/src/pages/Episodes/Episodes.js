import React, { useEffect } from "react";
import Page from "../../components/Page";
import "./Episodes.scss";
import axios from "axios";
import { getEpisodes } from "../../redux/episodesReducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card'

function Episodes(props) {
  const { getEpisodes } = props;

  useEffect(() => {
    axios.get("/episodes").then((res) => {
      getEpisodes(res.data);
    });
  }, [getEpisodes]);

  const episodes = props.episodes.info.map((e, index) => {
    return (
      <Link key={index} to={`/episodes/${e.episode_name.replace(/ /g, "_")}`}>
        <Card variant="outlined" className="episodes-card">
          <div className="episodes-episode">
            <h4>{e.episode_name}</h4>
            <img src={e.episode_image} alt="simpsons" />
            <h6>{e.episode_synopsis}</h6>
          </div>
        </Card>
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
