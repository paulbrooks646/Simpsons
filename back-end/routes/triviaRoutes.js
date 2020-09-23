const express = require("express");

const triviaController = require("../controllers/triviaController");

const router = express.Router();

router.get("/trivia", triviaController.getTrivia);

module.exports = router;
