import React, { useState, useEffect } from "react";
import "./Characters.scss";
import Page from "../../components/Page";
import axios from "axios";

export default function Characters(props) {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    axios.get("/characters").then((res) => {
      setCharacters(res.data);
    });
  }, []);

  return (
    <Page>
      <div>Characters</div>
    </Page>
  );
}
