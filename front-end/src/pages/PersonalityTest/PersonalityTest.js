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
  const [questions, setQuestions] = useState();
  const [loading, setLoading] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [currentTheme, setCurrentTheme] = useState("");
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [characters, setCharacters] = useState();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (!characters) {
      axios.get("/personality-test").then((res) => {
        setQuestions(res.data);
      });
      axios.get("/characters").then((res) => {
        setCharacters(res.data);
        setLoading(false);
      });
    }
  });

  const iterateQuestion = () => {
    if (i < questions.length - 1) {
      setI(i + 1);
      setCurrentTheme(questions[i].theme);
    } else {
      setIsLastQuestion(!isLastQuestion);
    }
  };

  const handleNextQuestion = () => {
    if (!selectedAnswer) {
      alert("You have to select an answer");
    } else {
      if (characters.length > 1) {
        setCharacters(
          characters.filter((row) => row.currentTheme === selectedAnswer)
        );
      } else {
        setIsLastQuestion(questions[0].question_name_one);
      }
      iterateQuestion();
    }
  };

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
                alt="Quiz card image"
                className="quiz-card-image"
              />
              <h2 className="quiz-question">{questions[i].question}</h2>

              <FormControl component="fieldset" className="trivia-answers">
                <RadioGroup
                  className="quiz-radio-group"
                  row
                  aria-label={`Question ${questions[i].question_id}`}
                  name={`Question ${questions[i].question_id}`}
                  value={selectedAnswer}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio color="primary" />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="No"
                    control={<Radio color="primary" />}
                    label="No"
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
