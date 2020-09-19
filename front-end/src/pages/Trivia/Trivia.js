import React from "react"
import Page from "../../components/Page"
import Card from "@material-ui/core/Card"
import Button from "@material-ui/core/Button"

export default function Trivia(props) {

    return (
      <Page>
        <div
          style={{
            height: "calc(100vh - 75px)",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
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
              <h2>
                If you've committed a crime and want to confess, click 'Yes'.
                Otherwise, click 'No'
              </h2>
              <div style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}>
                <Button variant="outlined" color="secondary">
                  Yes
                </Button>
                <Button variant="outlined" color="secondary">
                  No
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Page>
    );
}