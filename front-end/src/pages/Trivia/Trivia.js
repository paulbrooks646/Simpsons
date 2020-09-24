import React from "react";
import "./Trivia.scss";
import Page from "../../components/Page";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";

export default function trivia() {
  return (
    <Page>
      <div className="trivia-main">
        <h2 className="trivia-subtitle">Choose a quiz!</h2>
        <div className="trivia-card-div">
          <Link to="/trivia/1">
            <Card className="trivia-card">Beginner</Card>
          </Link>
          <Link to="/trivia/2">
            <Card className="trivia-card">Advanced</Card>
          </Link>
          <Link to="/trivia/3">
            <Card className="trivia-card">Expert</Card>
          </Link>
          <Link to="/trivia/4">
            <Card className="trivia-card">Name that Character</Card>
          </Link>
          <Link to="/trivia/5">
            <Card className="trivia-card">Finish the Quote</Card>
          </Link>
          <Link to="/trivia/6">
            <Card className="trivia-card">Who Said That</Card>
          </Link>
          <Link to="/personality-test">
            <Card className="trivia-card">
              Which Simpsons Charater are You?
            </Card>
          </Link>
        </div>
      </div>
    </Page>
  );
}
