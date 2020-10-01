const express = require("express");

const triviaController = require("../controllers/triviaController");

const router = express.Router();

router.get("/trivia/:quiz_number", triviaController.getTrivia);
router.get("/personality-test", triviaController.getPersonalityTest)
router.get("/personality-test/:next_question")

module.exports = router;
