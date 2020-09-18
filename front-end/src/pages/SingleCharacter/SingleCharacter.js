import React, { useState, useEffect } from "react";
import "./SingleCharacter.scss";
import Page from "../../components/Page";
import axios from "axios";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

export default function SingleCharacter(props) {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/characters/${props.match.params.character.replace(/_/g, " ")}`)
      .then((res) => {
        setCharacter(res.data);
        setLoading(false);
      });
  }, []);

  const characterInfo = character.map((e, index) => {
    return (
      <div className="single-character-main">
        <Card className="character-detail-card">
          <div className="single-character-card-div">
            <h1>{e.name}</h1>
            <img src={e.picture} alt={e.name} />
          </div>
          <h6 className="character-description">{e.description}</h6>
          <h3>Voice actor: {e.voice_actor}</h3>
          <div className="quote-div">
            <h4>{e.quote}</h4>
            <h6>{e.name}</h6>
          </div>
          <h5>
            First Appearance:{" "}
            <Link to={`/episodes/${e.first_appearance.replace(/ /g, "_")}`}>
              {e.first_appearance}
            </Link>
          </h5>
        </Card>
      </div>
    );
  });

  return (
    <Page>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="single-character-body">{characterInfo}</div>
      )}
    </Page>
  );
}
