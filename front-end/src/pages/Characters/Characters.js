import React, { useState, useEffect } from "react";
import "./Characters.scss";
import Page from "../../components/Page";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import {Link} from 'react-router-dom'

export default function Characters(props) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("/characters").then((res) => {
      setCharacters(res.data);
    });
  }, []);

  const characterList = characters.map((e, index) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
          flexDirection: "column",
        }}
      >
        <Card variant="outlined" className="character-card">
          <img src={e.picture} style={{ height: "100px", marginTop: "10px" }} />
          <h6 style={{ zIndex: "1", position: "absolute", top: "100px" }}>
            {e.name}
          </h6>
        </Card>
        <Card
          className="character-detail-card"
          style={{
            width: "600px",
            height: "600px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
              marginTop: "10px",
            }}
          >
            <h1>{e.name}</h1>
            <img src={e.picture} style={{ height: "100px" }} />
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
                <div style={{display: 'flex', flexDirection: "column", alignItems: 'center', border: 'solid 1px blue', padding: '10px'}}>
                    <h4>{e.quote}</h4>
                    <h6>{e.name}</h6>
                </div>
                <h5>First Appearance: <Link to={`/episodes/${e.first_appearance}`}>{e.first_appearance}</Link></h5>
        </Card>
      </div>
    );
  });

  return (
    <Page>
      <div>{characterList}</div>
    </Page>
  );
}
