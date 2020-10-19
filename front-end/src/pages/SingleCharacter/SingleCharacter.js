import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Page from "../../components/Page";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import "./SingleCharacter.scss";

export default function SingleCharacter(props) {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    axios
      .get(`/characters/${props.match.params.character.replace(/_/g, " ")}`)
      .then((res) => {
        if (isMounted) {
          setCharacter(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        props.history.push("/error");
      });
    return () => (isMounted = false);
  });

  return (
    <Page>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="single-character-body">
          <div className="single-character-main">
            <Card className="character-detail-card">
              <div className="single-character-card-div">
                <h1>{character[0].name}</h1>
                <img src={character[0].picture} alt={character[0].name} />
              </div>
              <h6 className="character-description">
                {character[0].description}
              </h6>
              <h3>Voice actor: {character[0].voice_actor}</h3>
              <div className="quote-div">
                <h4>{character[0].quote}</h4>
                <h6>{character[0].name}</h6>
              </div>
              <h5>
                First Appearance:{" "}
                <Link
                  component={RouterLink}
                  to={`/episodes/${character[0].first_appearance.replace(
                    / /g,
                    "_"
                  )}`}
                >
                  {character[0].first_appearance}
                </Link>
              </h5>
              <Button
                startIcon={<ArrowBackIcon />}
                size="small"
                color="secondary"
                component={RouterLink}
                to="/characters"
              >
                back to all characters
              </Button>
            </Card>
          </div>
        </div>
      )}
    </Page>
  );
}
