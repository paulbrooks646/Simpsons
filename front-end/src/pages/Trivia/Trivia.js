import React, { useState } from "react";
import Page from "../../components/Page";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import "./Trivia.scss";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export default function Trivia(props) {
  const [maggie, setMaggie] = useState();
  const [sector, setSector] = useState();
  const [burns, setBurns] = useState();

  return (
    <Page>
      <div className="trivia-main">
        <h1>Trivia</h1>
        <Card className="trivia-card">
          <div className="trivia-card-div">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png"
              alt="Maggie Simpson"
              className="trivia-card-image"
            />
            <h2 className="trivia-question">
              When Maggie is scanned in the supermarket how much does she cost?
            </h2>

            <FormControl component="fieldset" className="trivia-answers">
              <RadioGroup
                className="trivia-radio-group"
                row
                aria-label="maggie"
                name="maggie"
                value={maggie}
                onChange={(e) => setMaggie(e.target.value)}
              >
                <FormControlLabel
                  value="$1"
                  control={<Radio style={{ color: "red" }} />}
                  label="$1"
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value="$2"
                  control={<Radio style={{ color: "red" }} />}
                  label="$2"
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value="$3"
                  control={<Radio style={{ color: "red" }} />}
                  label="$3"
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value="$847.63"
                  control={<Radio style={{ color: "red" }} />}
                  label="$847.63"
                  style={{ color: "red" }}
                />
              </RadioGroup>
            </FormControl>
          </div>
        </Card>
        <Card className="trivia-card">
          <div className="trivia-card-div">
            <img
              src="https://www.energy.gov/sites/prod/files/styles/borealis_photo_gallery_large_respondmedium/public/2018/03/f49/Elektrownia_J%C4%85drowa_w_Springfield_0.png?itok=d07fctJh"
              alt="Springfield Nuclear Power Plant"
              className="trivia-card-image"
            />
            <h2 className="trivia-question">
              Which sector does Homer work in at the nuclear power plant?
            </h2>

            <FormControl component="fieldset" className="trivia-answers">
              <RadioGroup
                className="trivia-radio-group"
                row
                aria-label="sector"
                name="sector"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
              >
                <FormControlLabel
                  value="8A"
                  control={<Radio style={{ color: "red" }} />}
                  label="8A"
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value="3C"
                  control={<Radio style={{ color: "red" }} />}
                  label="3C"
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value="7G"
                  control={<Radio style={{ color: "red" }} />}
                  label="7G"
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value="6E"
                  control={<Radio style={{ color: "red" }} />}
                  label="6E"
                  style={{ color: "red" }}
                />
              </RadioGroup>
            </FormControl>
          </div>
        </Card>
        <Card className="trivia-card">
          <div className="trivia-card-div">
            <img
              src="https://nationalpostcom.files.wordpress.com/2018/03/mrb.jpg?quality=100&strip=all&w=642"
              alt="Mr Burns after being shot"
              className="trivia-card-image"
            />
            <h2 className="trivia-question">Who shot Mr. Burns?</h2>
            <FormControl component="fieldset" className="trivia-answers">
              <RadioGroup
                className="trivia-radio-group"
                row
                aria-label="burns"
                name="burns"
                value={burns}
                onChange={(e) => setBurns(e.target.value)}
              >
                <FormControlLabel
                  value="Homer Simpson"
                  control={<Radio style={{ color: "red" }} />}
                  label="Homer Simpson"
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value="Maggie Simpson"
                  control={<Radio style={{ color: "red" }} />}
                  label="Maggie Simpson"
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value="Wayland Smithers"
                  control={<Radio style={{ color: "red" }} />}
                  label="Wayland Smithers"
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value="Groundskeeper Willie"
                  control={<Radio style={{ color: "red" }} />}
                  label="Groundskeeper Willie"
                  style={{ color: "red" }}
                />
              </RadioGroup>
            </FormControl>
          </div>
        </Card>
        {/* <Card className="trivia-card">
          <div className="trivia-card-div">
            <img src="" alt="" className="trivia-card-image" />
            <h2 className="trivia-question"></h2>

            <FormControl component="fieldset" className="trivia-answers">
              <RadioGroup
                className="trivia-radio-group"
                row
                aria-label=""
                name=""
                value={}
                onChange={(e) => set(e.target.value)}
              >
                <FormControlLabel
                  value=""
                  control={<Radio style={{ color: "red" }} />}
                  label=""
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value=""
                  control={<Radio style={{ color: "red" }} />}
                  label=""
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value=""
                  control={<Radio style={{ color: "red" }} />}
                  label=""
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value=""
                  control={<Radio style={{ color: "red" }} />}
                  label=""
                  style={{ color: "red" }}
                />
              </RadioGroup>
            </FormControl>
          </div>
        </Card>{" "}
        <Card className="trivia-card">
          <div className="trivia-card-div">
            <img src="" alt="" className="trivia-card-image" />
            <h2 className="trivia-question"></h2>

            <FormControl component="fieldset" className="trivia-answers">
              <RadioGroup
                className="trivia-radio-group"
                row
                aria-label=""
                name=""
                value={}
                onChange={(e) => set(e.target.value)}
              >
                <FormControlLabel
                  value=""
                  control={<Radio style={{ color: "red" }} />}
                  label=""
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value=""
                  control={<Radio style={{ color: "red" }} />}
                  label=""
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value=""
                  control={<Radio style={{ color: "red" }} />}
                  label=""
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value=""
                  control={<Radio style={{ color: "red" }} />}
                  label=""
                  style={{ color: "red" }}
                />
              </RadioGroup>
            </FormControl>
          </div>
        </Card>{" "}
        <Card className="trivia-card">
          <div className="trivia-card-div">
            <img src="" alt="" className="trivia-card-image" />
            <h2 className="trivia-question"></h2>

            <FormControl component="fieldset" className="trivia-answers">
              <RadioGroup
                className="trivia-radio-group"
                row
                aria-label=""
                name=""
                value={}
                onChange={(e) => set(e.target.value)}
              >
                <FormControlLabel
                  value=""
                  control={<Radio style={{ color: "red" }} />}
                  label=""
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value=""
                  control={<Radio style={{ color: "red" }} />}
                  label=""
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value=""
                  control={<Radio style={{ color: "red" }} />}
                  label=""
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value=""
                  control={<Radio style={{ color: "red" }} />}
                  label=""
                  style={{ color: "red" }}
                />
              </RadioGroup>
            </FormControl>
          </div>
        </Card>{" "}
        <Card className="trivia-card">
          <div className="trivia-card-div">
            <img src="" alt="" className="trivia-card-image" />
            <h2 className="trivia-question"></h2>

            <FormControl component="fieldset" className="trivia-answers">
              <RadioGroup
                className="trivia-radio-group"
                row
                aria-label=""
                name=""
                value={}
                onChange={(e) => set(e.target.value)}
              >
                <FormControlLabel
                  value=""
                  control={<Radio style={{ color: "red" }} />}
                  label=""
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value=""
                  control={<Radio style={{ color: "red" }} />}
                  label=""
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value=""
                  control={<Radio style={{ color: "red" }} />}
                  label=""
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value=""
                  control={<Radio style={{ color: "red" }} />}
                  label=""
                  style={{ color: "red" }}
                />
              </RadioGroup>
            </FormControl>
          </div>
        </Card>{" "}
        <Card className="trivia-card">
          <div className="trivia-card-div">
            <img src="" alt="" className="trivia-card-image" />
            <h2 className="trivia-question"></h2>

            <FormControl component="fieldset" className="trivia-answers">
              <RadioGroup
                className="trivia-radio-group"
                row
                aria-label=""
                name=""
                value={}
                onChange={(e) => set(e.target.value)}
              >
                <FormControlLabel
                  value=""
                  control={<Radio style={{ color: "red" }} />}
                  label=""
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value=""
                  control={<Radio style={{ color: "red" }} />}
                  label=""
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value=""
                  control={<Radio style={{ color: "red" }} />}
                  label=""
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value=""
                  control={<Radio style={{ color: "red" }} />}
                  label=""
                  style={{ color: "red" }}
                />
              </RadioGroup>
            </FormControl>
          </div>
        </Card>{" "}
        <Card className="trivia-card">
          <div className="trivia-card-div">
            <img src="" alt="" className="trivia-card-image" />
            <h2 className="trivia-question"></h2>

            <FormControl component="fieldset" className="trivia-answers">
              <RadioGroup
                className="trivia-radio-group"
                row
                aria-label=""
                name=""
                value={}
                onChange={(e) => set(e.target.value)}
              >
                <FormControlLabel
                  value=""
                  control={<Radio style={{ color: "red" }} />}
                  label=""
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value=""
                  control={<Radio style={{ color: "red" }} />}
                  label=""
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value=""
                  control={<Radio style={{ color: "red" }} />}
                  label=""
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value=""
                  control={<Radio style={{ color: "red" }} />}
                  label=""
                  style={{ color: "red" }}
                />
              </RadioGroup>
            </FormControl>
          </div>
        </Card>{" "}
        <Card className="trivia-card">
          <div className="trivia-card-div">
            <img src="" alt="" className="trivia-card-image" />
            <h2 className="trivia-question"></h2>

            <FormControl component="fieldset" className="trivia-answers">
              <RadioGroup
                className="trivia-radio-group"
                row
                aria-label=""
                name=""
                value={}
                onChange={(e) => set(e.target.value)}
              >
                <FormControlLabel
                  value=""
                  control={<Radio style={{ color: "red" }} />}
                  label=""
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value=""
                  control={<Radio style={{ color: "red" }} />}
                  label=""
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value=""
                  control={<Radio style={{ color: "red" }} />}
                  label=""
                  style={{ color: "red" }}
                />
                <FormControlLabel
                  value=""
                  control={<Radio style={{ color: "red" }} />}
                  label=""
                  style={{ color: "red" }}
                />
              </RadioGroup>
            </FormControl>
          </div>
        </Card>  */}
        <Button variant="contained" color="secondary">
          Submit Answers
        </Button>
      </div>
    </Page>
  );
}
