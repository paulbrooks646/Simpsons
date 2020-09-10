module.exports = {
  getEpisodes: (req, res) => {
    const db = req.app.get("db");

    db.get_episodes().then((episodes) => res.status(200).send(episodes));
  },

  getEpisode: (req, res) => {
    const db = req.app.get("db");
    const { episode } = req.params;

    db.get_episode(episode).then((episode) => res.status(200).send(episode));
  },

  updateRatingAndReview: async (req, res) => {
    const db = req.app.get("db");
    const { user_id } = req.params;
    const { rating, review, episode_name } = req.body;
    const ratingExists = await db.check_existing_rating([
      user_id,
      episode_name,
    ]);
    const reviewExists = await db.check_existing_review([
      user_id,
      episode_name,
    ]);
    if (ratingExists[0])
      db.update_rating([user_id, episode_name, +rating]).then(() =>
        res.sendStatus(200).catch((err) => res.status(404).send(err))
      );
    if (reviewExists[0])
      db.update_review([user_id, episode_name, review]).then(() =>
        res.sendStatus(200).catch((err) => res.status(404).send(err))
      );
    if (!ratingExists[0] || !reviewExists[0])
      db.post_rating_and_review([
        user_id,
        episode_name,
        +rating,
        review,
      ]).then(() =>
        res.sendStatus(200).catch((err) => res.status(404).send(err))
      );
  },
};
