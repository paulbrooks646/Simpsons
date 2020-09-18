import React, { useState, useEffect } from "react";
import "./Characters.scss";
import Page from "../../components/Page";
import axios from "axios";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";

export default function Characters(props) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("/characters").then((res) => {
      setCharacters(res.data);
    });
  }, []);

  const characterList = characters.map((e, index) => {
    return (
      <div className="character-list" key={index}>
        <Link to={`/characters/${e.name.replace(/ /g, "_")}`}>
          <Card variant="outlined" className="character-card">
            <img src={e.picture} className="character-image" alt={e.name} />
            <h6 className="character-name">{e.name}</h6>
          </Card>
        </Link>
      </div>
    );
  });

  return (
    <Page>
      <div>{characterList}</div>
    </Page>
  );
}
