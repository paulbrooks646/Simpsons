const express = require("express");

const charactersController = require("../controllers/charactersController");

const router = express.Router();

router.get("/characters", charactersController.getCharacters);
router.get("/characters/:character", charactersController.getCharacter);

module.exports = router;
