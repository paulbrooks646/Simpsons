import React, { useState, useEffect } from "react";
import "./SingleCharacter.scss";
import Page from "../../components/Page";
import axios from "axios";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";

export default function SingleCharacter(props) {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get(`/characters/${props.match.params.character.replace(/_/g, " ")}`)
      .then((res) => {
        setCharacter(res.data);
      });
  }, []);

  const characterInfo = character.map((e, index) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          top: "25px",
        }}
      >
        <Card className="character-detail-card">
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
            }}
          >
            <h1>{e.name}</h1>
            <img src={e.picture} style={{ height: "100px" }} alt={e.name} />
          </div>
          <h6
            style={{
              width: "90%",
              border: "solid 1px red",
              textAlign: "center",
              padding: "10px",
            }}
          >
            {e.description}
          </h6>
          <h3>Voice actor: {e.voice_actor}</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "solid 1px blue",
              padding: "10px",
              width: "90%",
            }}
          >
            <h4>{e.quote}</h4>
            <h6>{e.name}</h6>
          </div>
          <h5>
            First Appearance:{" "}
            <Link to={`/episodes/${e.first_appearance}`}>
              {e.first_appearance}
            </Link>
          </h5>
        </Card>
      </div>
    );
  });

  return (
    <Page>
      <div>{characterInfo}</div>
    </Page>
  );
}
