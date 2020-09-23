import React, { useState, useEffect } from "react";
import Page from "../../components/Page";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import "./Trivia.scss";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import axios from "axios";

export default function Trivia(props) {
  useEffect(() => {
    axios.get("/trivia").then(res => setQuestions(res.data));
  });

  const [questions, setQuestions] = useState();

  return (
    <Page>
      <div className="trivia-main">
        <h1>Trivia</h1>
        <Card className="trivia-card">
          <div className="trivia-card-div">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png"
              alt="Maggie Simpson"
              className="trivia-card-image"
            />
            <h2 className="trivia-question">
              When Maggie is scanned in the supermarket how much does she cost?
            </h2>

            <FormControl component="fieldset" className="trivia-answers">
              <RadioGroup
                className="trivia-radio-group"
                row
                aria-label="maggie"
                name="maggie"
              >
                <FormControlLabel
                  value="$1"
                  control={<Radio style={{ color: "red" }} />}
                  label="$1"
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value="$2"
                  control={<Radio style={{ color: "red" }} />}
                  label="$2"
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value="$3"
                  control={<Radio style={{ color: "red" }} />}
                  label="$3"
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value="$847.63"
                  control={<Radio style={{ color: "red" }} />}
                  label="$847.63"
                  style={{ color: "red" }}
                />
              </RadioGroup>
            </FormControl>
          </div>
        </Card>

        <Button variant="contained" color="secondary">
          Submit Answers
        </Button>
      </div>
    </Page>
  );
}
