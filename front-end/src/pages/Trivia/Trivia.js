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
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

export default function Trivia(props) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [i, setI] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isLastQuestion, setIsLastQuestion] = useState(false);

  useEffect(() => {
    axios.get("/trivia").then((res) => {
      setQuestions(res.data);
      setLoading(false);
    });
  }, []);

  const scoreTest = () => {
    alert(
      `Congratulations! You answered ${totalCorrect} questions correctly, you are one pathetic loser!`
    );
  };

  const iterateQuestion = () => {
    if (i < 2) {
      setI(i + 1);
    } else {
      setIsLastQuestion(!isLastQuestion);
    }
  };

  const scoreAnswer = () => {
    if (selectedAnswer === questions[i].answer) {
      setTotalCorrect(totalCorrect + 1);
    }
    iterateQuestion();
  };

  const handleNextQuestion = () => {
    scoreAnswer();
  };

  //   const questionList = questions.map((e, index) => {
  //     return (
  //       <Card className="trivia-card">
  //         <div className="trivia-card-div">
  //           <img
  //             src={e.question_picture}
  //             alt="Maggie Simpson"
  //             className="trivia-card-image"
  //           />
  //           <h2 className="trivia-question">{e.question}</h2>

  //           <FormControl component="fieldset" className="trivia-answers">
  //             <RadioGroup
  //               className="trivia-radio-group"
  //               row
  //               aria-label="maggie"
  //               name="maggie"
  //             >
  //               <FormControlLabel
  //                 value={e.option_one}
  //                 control={<Radio style={{ color: "red" }} />}
  //                 label={e.option_one}
  //                 style={{ color: "red" }}
  //               />
  //               <FormControlLabel
  //                 value={e.option_two}
  //                 control={<Radio style={{ color: "red" }} />}
  //                 label={e.option_two}
  //                 style={{ color: "red" }}
  //               />
  //               <FormControlLabel
  //                 value={e.option_three}
  //                 control={<Radio style={{ color: "red" }} />}
  //                 label={e.option_three}
  //                 style={{ color: "red" }}
  //               />
  //               <FormControlLabel
  //                 value={e.option_four}
  //                 control={<Radio style={{ color: "red" }} />}
  //                 label={e.option_four}
  //                 style={{ color: "red" }}
  //               />
  //             </RadioGroup>
  //           </FormControl>
  //         </div>
  //       </Card>
  //     );
  //   });

  return (
    <Page>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="trivia-main">
          <h1 className="trivia-title">Trivia</h1>
          <Card id={`${isLastQuestion ? "trivia-card-closed" : "trivia-card"}`}>
            <div className="trivia-card-div">
              <img
                src={questions[i].question_picture}
                alt="Maggie Simpson"
                className="trivia-card-image"
              />
              <h2 className="trivia-question">{questions[i].question}</h2>

              <FormControl component="fieldset" className="trivia-answers">
                <RadioGroup
                  className="trivia-radio-group"
                  row
                  aria-label="maggie"
                  name="maggie"
                  value={selectedAnswer}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                >
                  <FormControlLabel
                    value={questions[i].option_one}
                    control={<Radio style={{ color: "red" }} />}
                    label={questions[i].option_one}
                    style={{ color: "red" }}
                  />
                  <FormControlLabel
                    value={questions[i].option_two}
                    control={<Radio style={{ color: "red" }} />}
                    label={questions[i].option_two}
                    style={{ color: "red" }}
                  />
                  <FormControlLabel
                    value={questions[i].option_three}
                    control={<Radio style={{ color: "red" }} />}
                    label={questions[i].option_three}
                    style={{ color: "red" }}
                  />
                  <FormControlLabel
                    value={questions[i].option_four}
                    control={<Radio style={{ color: "red" }} />}
                    label={questions[i].option_four}
                    style={{ color: "red" }}
                  />
                </RadioGroup>
              </FormControl>
              <Button
                variant="contained"
                color="secondary"
                id="trivia-next-button"
                onClick={handleNextQuestion}
              >
                Next Question
              </Button>
            </div>
          </Card>
          <Card id={`${isLastQuestion ? "trivia-card" : "trivia-card-closed"}`}>
            <div className="trivia-card-div">
              <img
                src="https://www.googlecover.com/_asset/_cover/Happy-Homer-Simpson_676.jpg"
                alt="Happy Homer Simpson"
                className="trivia-card-image"
              />
              <h2 className="trivia-question">
                Thank you for taking our quiz!
              </h2>

              <Button
                variant="contained"
                color="secondary"
                onClick={scoreTest}
                id="trivia-submit-button"
              >
                Get Your Results
              </Button>
            </div>
          </Card>
        </div>
      )}
    </Page>
  );
}
