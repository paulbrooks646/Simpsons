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


  return (
    <Page>
      <div>Episodes</div>
    </Page>
  );
}

const mapStateToProps = (reduxState) => reduxState;
export default connect(mapStateToProps, { getEpisodes })(Episodes);
