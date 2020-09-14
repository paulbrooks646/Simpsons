const express = require("express");

const episodesController = require("../controllers/episodesController");

const router = express.Router();

router.get("/episodes", episodesController.getEpisodes);
router.get("/episode/:episode", episodesController.getEpisode);
router.post("/watchlist/:user_id", episodesController.addToWatchlist);
router.put("/rating-review/:user_id", episodesController.updateRatingAndReview);
router.get("/watchlist/:user_id", episodesController.getWatchlist);

module.exports = router;
