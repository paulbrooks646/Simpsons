import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Carousel from "react-material-ui-carousel";
import Page from "../../components/Page";
import SimpsonsCharacters from "../../images/TriviaPage/simpsons-characters.jpg";
import WhoSaidThat from "../../images/TriviaPage/who-said-that.jpg";
import ProfessorFrinkChalkboard from "../../images/TriviaPage/professor-frink-chalkboard.gif";
import BartSimpsonTakingTest from "../../images/TriviaPage/bart-simpson-taking-test.jpeg";
import "./Trivia.scss";

export default function Trivia() {
  const items = [
    {
      triviaName: "Beginner",
      triviaURL: "/trivia/1",
      triviaImage: "https://via.placeholder.com/500",
    },
    {
      triviaName: "Advanced",
      triviaURL: "/trivia/2",
      triviaImage: BartSimpsonTakingTest,
    },
    {
      triviaName: "Expert",
      triviaURL: "/trivia/3",
      triviaImage: ProfessorFrinkChalkboard,
    },
    {
      triviaName: "Name That Character",
      triviaURL: "/trivia/4",
      triviaImage: "https://via.placeholder.com/500",
    },
    {
      triviaName: "Finish The Quote",
      triviaURL: "/trivia/5",
      triviaImage: "https://via.placeholder.com/500",
    },
    {
      triviaName: "Who Said That",
      triviaURL: "/trivia/6",
      triviaImage: WhoSaidThat,
    },
    {
      triviaName: "Which Simpsons Character Are You?",
      triviaURL: "/personality-test",
      triviaImage: SimpsonsCharacters,
    },
  ];

  return (
    <Page>
      <div className="trivia-main">
        <h2>Choose a quiz!</h2>
        <Carousel
          autoPlay={false}
          navButtonsAlwaysVisible={true}
          navButtonsAlwaysInvisible={false}
          fullHeightHover={false}
          className="trivia-carousel"
        >
          {items.map((item, index) => (
            <Card key={index}>
              <Link
                to={item.triviaURL}
                className="trivia-carousel-link-wrapper"
              >
                <CardActionArea>
                  <CardMedia
                    className="trivia-carousel-image"
                    image={item.triviaImage}
                  />
                  <CardContent>
                    <Typography variant="h4">{item.triviaName}</Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          ))}
        </Carousel>
      </div>
    </Page>
  );
}
