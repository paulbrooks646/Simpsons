const express = require("express");

const episodesController = require("../controllers/episodesController");

const router = express.Router();

router.get("/episodes", episodesController.getEpisodes);
router.get("/episode/:episode", episodesController.getEpisode);
router.post("/watchlist/:user_id", episodesController.addToWatchlist);
router.put("/rating-review/:user_id", episodesController.updateRatingAndReview);
router.delete(
  "/rating-review/:episode_name",
  episodesController.deleteRatingAndReview
);
router.get("/watchlist/:user_id", episodesController.getWatchlist);
router.delete(
  "/watchlist/:episode_name",
  episodesController.deleteFromWatchlist
);
router.post("/favorites/:user_id", episodesController.addToFavorites);
router.delete(
  "/favorites/:episode_name",
  episodesController.removeFromFavorites
);
router.get("/favorites/:user_id", episodesController.getFavorites);

module.exports = router;
