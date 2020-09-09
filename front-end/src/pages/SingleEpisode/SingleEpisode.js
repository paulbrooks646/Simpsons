import React, { useEffect, useState } from "react";
import Page from "../../components/Page";
import "./SingleEpisode.scss";
import axios from "axios";

export default function SingleEpisode(props) {

  const [info, setInfo] = useState([])

  useEffect(() => {
    const episode = props.match.params.episode.replace(/_/g, " ")
    axios.get(`/episode/${episode}`)
      .then(res => {
        setInfo(res.data[0])
    })
    
  }, [props.match.params.episode])
  
  
  // const episodeInformation = info.info[0].map((e, index) => {
  //   return (
  //     <h1>Please work!</h1>
  //   )
  // })

  return (
      <div style={{border: 'solid'}}>
      <h1>{info.episode_name}</h1>
      <img src={info.episode_image} alt="simpsons family at christmas"/>
      <h2>{info.episode_synopsis}</h2>
      <h2>Air Date: {info.air_date}</h2>
      </div>
  )

}
