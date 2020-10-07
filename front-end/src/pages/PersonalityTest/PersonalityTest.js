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
  let [i, setI] = useState(0);

  useEffect(() => {
    if (!characters) {
      axios.get("/personality-test").then((res) => {
        setQuestions(res.data);
        setCurrentTheme(res.data[0].theme);

        axios.get("/characters").then((res) => {
          setCharacters(res.data);
          setLoading(false);
        });
      });
    }
  });

  const iterateQuestion = () => {
    setI(i += 1);
    setCurrentTheme(questions[i].theme);
    setSelectedAnswer("");
  };

  const checkLastQuestion = () => {
    return new Promise((resolve, reject) => {
      if (!selectedAnswer) {
        alert("You have to select an answer");
      } else {
        console.log(characters.length)
        setCharacters(
          characters.filter((row) => {
            return row[currentTheme] === selectedAnswer;
          })
        );
      }
      console.log(characters.length)
      resolve();
    });
  };

  const handleNextQuestion = async () => {
    await checkLastQuestion();
    console.log(characters.length)
    if (characters.length >= 2) {
      iterateQuestion();
    } else {
      setIsLastQuestion(true);
    }
  };

  return (
    <Page>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="quiz-main">
          <h1 className="quiz-title">Which Simpsons Character are you?</h1>
          <Card id={`${isLastQuestion ? "quiz-card-closed" : "quiz-card"}`}>
            <div className="quiz-card-div">
              <img
                src={questions[i].question_picture}
                alt={questions[i].question}
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
          <Card id={`${isLastQuestion ? "quiz-card" : "quiz-card-closed"}`}>
            <h1>You are Hans Moleman!</h1>
          </Card>
        </div>
      )}
    </Page>
  );
}
