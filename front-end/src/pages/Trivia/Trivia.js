import React from "react"
import "./Trivia.scss"
import Page from "../../components/Page"
import Card from "@material-ui/core/Card"

export default function trivia() {

    return (
      <Page>
            <div>
                <h1>Trivia</h1>
                <h2>Choose a quiz!</h2>
          <Card className="trivia-options">Beginner</Card>
          <Card>Advanced</Card>
          <Card>Expert</Card>
          <Card>Name that Character</Card>
          <Card>Finish the Quote</Card>
          <Card>Who Said That</Card>
          <Card>Which Simpsons Charater are You?</Card>
        </div>
      </Page>
    );
}
