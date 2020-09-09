import React, { useEffect, useState } from "react";
import Page from "../../components/Page";
import "./SingleEpisode.scss";
import axios from "axios";

export default function SingleEpisode(props) {

  const [info, setInfo] = useState()

  useEffect(() => {
    const episode = props.match.params.episode.replace(/_/g, " ")
    axios.get(`/episode/${episode}`)
      .then(res => {
      setInfo(res.data)
    })
    
}, [props.match.params.episode])




  return (
    <Page>
      <div>

      </div>
    </Page>
  );
}
