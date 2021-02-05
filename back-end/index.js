require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const massive = require("massive");
const { CONNECTION_STRING, SESSION_SECRET } = process.env;
const session = require("express-session");
const userRoutes = require("./routes/userRoutes");
const episodesRoutes = require("./routes/episodesRoutes");
const charactersRouters = require("./routes/charactersRoutes");
const triviaRoutes = require("./routes/triviaRoutes")
const path = require("path")

const app = express();

app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    secret: SESSION_SECRET,
  })
);

app.use(userRoutes);
app.use(episodesRoutes);
app.use(charactersRouters);
app.use(triviaRoutes)

app.use(express.static(__dirname + "/../build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

const port = 5000;

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((db) => {
    app.set("db", db);
    console.log("Connected to Database");
  })
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
