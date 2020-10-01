import React, { useState, useEffect } from "react";
import "./PersonalityTest.scss";
import Page from "../../components/Page";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import axios from "axios";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

export default function PersonalityTest(props) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [i, setI] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isLastQuestion, setIsLastQuestion] = useState(false);

  useEffect(() => {
    axios.get('/personality-test').then((res) => {
      setQuestions(res.data);
      setLoading(false);
    });
  });

  const handleNextQuestion = () => {

  }

  return (
    <Page>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="quiz-main">
          <h1 className="quiz-title">Which Simpson's Charater are you?</h1>
          <Card id={`${isLastQuestion ? "quiz-card-closed" : "quiz-card"}`}>
            <div className="quiz-card-div">
              <img
                src={questions[i].question_picture}
                alt="Maggie Simpson"
                className="quiz-card-image"
              />
              <h2 className="quiz-question">{questions[i].question}</h2>

              <FormControl component="fieldset" className="trivia-answers">
                <RadioGroup
                  className="quiz-radio-group"
                  row
                  aria-label="maggie"
                  name="maggie"
                  value={selectedAnswer}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                >
                  <FormControlLabel
                    value={questions[i].answer_one}
                    control={<Radio style={{ color: "red" }} />}
                    label={questions[i].answer_one}
                    style={{ color: "red" }}
                  />
                  <FormControlLabel
                    value={questions[i].answer_two}
                    control={<Radio style={{ color: "red" }} />}
                    label={questions[i].answer_two}
                    style={{ color: "red" }}
                  />
                </RadioGroup>
              </FormControl>
              <Button
                variant="contained"
                color="secondary"
                id="quiz-next-button"
                onClick={handleNextQuestion}
              >
                Next Question
              </Button>
            </div>
          </Card>
          
        </div>
      )}
    </Page>
  );
}
