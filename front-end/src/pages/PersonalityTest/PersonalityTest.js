import React from "react";
import "./PersonalityTest.scss";
import Page from "../../components/Page"
import Card from "@material-ui/core/Card"

export default function PersonalityTest() {
  // const [userAnswer, setUserAnswer] = useState(null);
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [options, setOptions] = useState([]);

  return (
    <Page>
      <div className="personality-test-main">
<Card className="personalitytest-card"><h3>Congratulations! You are Hans Moleman!</h3></Card>
      </div>
    </Page>
  );
}
