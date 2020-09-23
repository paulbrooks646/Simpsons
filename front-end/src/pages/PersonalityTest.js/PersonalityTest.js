import React, { useState } from "react";
import "./PersonalityTest.scss";

export default function PersonalityTest() {
  const [userAnswer, setUserAnswer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [options, setOptions] = useState([]);

  return <div>Personality Test</div>;
}
