import React, { useEffect, useState } from "react";
import Page from "../../components/Page";
import "./SingleEpisode.scss";
import axios from "axios";
import formatDate from "../../util/formatDate";
import Card from "@material-ui/core/Card";
import LoadingSpinner from "../../shared/LoadingSpinner";

export default function SingleEpisode(props) {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const episode = props.match.params.episode.replace(/_/g, " ");
    axios.get(`/episode/${episode}`).then((res) => {
      setInfo(res.data[0]);
      setLoading(false);
    });
  }, [props.match.params.episode]);

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
            </div>
          </Card>
        </div>
      )}
    </Page>
  );
}
