import React from "react";
import Page from "../../components/Page";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

export default function Trivia(props) {
  const yes = () => alert("A paddy wagon is now speeding to your home.");

  const no = () =>
    alert(
      "You have chosen 'No', meaning that you've committed a crime, but don't want to confess. A paddy wagon is now speeding to your home."
    );

  return (
    <Page>
      <div
        style={{
          height: "calc(100vh - 75px)",
          width: "100vw",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column",
          color: "red",
          backgroundColor: "#f8f8ff",
        }}
      >
        <h1>Trivia</h1>
        <Card
          style={{
            width: "500px",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/en/7/7a/Chief_Wiggum.png"
              alt="chief wiggums"
              style={{ height: "100px" }}
            />
            <h2 style={{ color: "blue" }}>
              If you've committed a crime and want to confess, click 'Yes'.
              Otherwise, click 'No'
            </h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "100%",
              }}
            >
              <Button variant="outlined" color="secondary" onClick={yes}>
                Yes
              </Button>
              <Button variant="outlined" color="secondary" onClick={no}>
                No
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </Page>
  );
}
