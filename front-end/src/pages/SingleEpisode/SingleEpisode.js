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
      <div style={{border: 'solid', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', textAlign: 'center', width: '500px'}}>
      <h1>{info.episode_name}</h1>
      <img src={info.episode_image} alt="simpsons family at christmas"/>
      <p>{info.episode_synopsis}</p>
      <h2>Air Date: {info.air_date}</h2>
      <p>{info.episode_quote}</p>
      <h2>Season: {info.season}</h2>
      </div>
  )

}
