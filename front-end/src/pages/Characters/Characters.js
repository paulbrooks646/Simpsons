import React, { useState, useEffect } from "react";
import "./Characters.scss";
import Page from "../../components/Page";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

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
          flexDirection: 'column'
        }}
      >
        <Card variant="outlined" className="character-card">
          <img src={e.picture} style={{ width: "80%", height: "90%" }} />
          <h6 style={{ zIndex: "5", position: "absolute", top: "110px"}}>
            {e.name}
          </h6>
            </Card>
            <Card className="character-detail-card" style={{width: '500px', height: "500px"}}>

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
