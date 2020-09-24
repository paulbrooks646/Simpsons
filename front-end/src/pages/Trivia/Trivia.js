import React from "react"
import "./Trivia.scss"
import Page from "../../components/Page"
import Card from "@material-ui/core/Card"

export default function trivia() {

    return (
      <Page>
        <div className="trivia-main">
          {/* <h1 className="trivia-title">Trivia</h1> */}
          <h2 className="trivia-subtitle">Choose a quiz!</h2>
          <div className="trivia-card-div">
            <Card className="trivia-card">Beginner</Card>
            <Card className="trivia-card">Advanced</Card>
            <Card className="trivia-card">Expert</Card>
            <Card className="trivia-card">Name that Character</Card>
            <Card className="trivia-card">Finish the Quote</Card>
            <Card className="trivia-card">Who Said That</Card>
            <Card className="trivia-card">
              Which Simpsons Charater are You?
            </Card>
          </div>
        </div>
      </Page>
    );
}
