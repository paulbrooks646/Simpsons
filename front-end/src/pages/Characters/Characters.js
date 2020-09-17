import React, { useState, useEffect } from "react";
import "./Characters.scss";
import Page from "../../components/Page";
import axios from "axios";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";

export default function Characters(props) {
  const [characters, setCharacters] = useState([]);
  const [detailView, setDetailView] = useState(false);

  useEffect(() => {
    axios.get("/characters").then((res) => {
      setCharacters(res.data);
    });
  }, []);

  const toggleDetailView = () => setDetailView(!detailView);

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
        <Link to={`/characters/${e.name}`}>
          <Card
            variant="outlined"
            className={`${
              detailView ? "character-card-closed" : "character-card"
            }`}
            onClick={toggleDetailView}
          >
            <img
              src={e.picture}
              style={{ height: "100px", marginTop: "10px" }}
              alt={e.name}
            />
            <h6 style={{ zIndex: "1", position: "absolute", top: "100px" }}>
              {e.name}
            </h6>
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
