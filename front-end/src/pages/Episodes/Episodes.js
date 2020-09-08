import React, { useEffect } from "react";
import Page from "../../components/Page";
import './Episodes.scss'
import axios from "axios";
import { getEpisodes } from '../../redux/episodesReducer'
import {connect} from 'react-redux'

function Episodes(props) {

  useEffect(() => {
    axios.get("/episodes").then(res => {
      props.getEpisodes(res.data)
    })
  }, [props.getEpisodes])


  const episodes = props.episodes.episodes.map((e, index) => {
    return (
      <div key={index} className="episodes-episode">
        <h1>{e.episode_name}</h1>
        <img src={e.episode_image} alt="simpsons"/>
        <h6>{e.episode_synopsis}</h6>
      </div>
    )
  })

  return (
    <Page>
      <div className="episode-main">{episodes}</div>
    </Page>
  );
}

const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps, { getEpisodes })(Episodes);
