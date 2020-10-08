import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Link from "@material-ui/core/Link";
import Page from "../../components/Page";
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
    let isMounted = true;
    if (!characters) {
      axios.get("/personality-test").then((res) => {
        if (isMounted) {
          setQuestions(res.data);
          setCurrentTheme(res.data[0].theme);
        }

        axios.get("/characters").then((res) => {
          if (isMounted) {
            setCharacters(res.data);
            setLoading(false);
          }
        });
      });
    } else if (characters.length === 1) {
      setIsLastQuestion(true);
    }
    return () => (isMounted = false);
  }, [characters]);

  const iterateQuestion = () => {
    setI((i += 1));
    setCurrentTheme(questions[i].theme);
    setSelectedAnswer("");
  };

  const handleNextQuestion = () => {
    if (!selectedAnswer) {
      alert("You have to select an answer");
    } else {
      setCharacters(() =>
        characters.filter((row) => row[currentTheme] === selectedAnswer)
      );
    }
    iterateQuestion();
  };

  return (
    <Page>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="quiz-main">
          <h1 className="quiz-title">Which Simpsons Character are you?</h1>
          <Card id="quiz-card">
            <div className="quiz-card-div">
              {!isLastQuestion ? (
                <>
                  <img
                    src={questions[i].question_picture}
                    alt={`Question ${i + 1}`}
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
                </>
              ) : (
                <>
                  <h1>
                    You are{" "}
                    <Link
                      component={RouterLink}
                      to={`/characters/${characters[0].name.replace(
                        / /g,
                        "_"
                      )}`}
                    >
                      {characters[0].name}!
                    </Link>
                  </h1>
                  <img
                    src={characters[0].picture}
                    alt={characters[0].name}
                    className="quiz-card-image"
                  />
                </>
              )}
            </div>
          </Card>
        </div>
      )}
    </Page>
  );
}
