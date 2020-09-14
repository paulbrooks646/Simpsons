require("dotenv").config();
const express = require("express");
const massive = require("massive");
const { CONNECTION_STRING, SESSION_SECRET } = process.env;
const session = require("express-session");
const userRoutes = require("./routes/userRoutes");
const episodesRoutes = require("./routes/episodesRoutes");

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
