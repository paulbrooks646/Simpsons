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
    const ratingReviewExists = await db.check_existing_rating_review([
      user_id,
      episode_name,
    ]);

    if (ratingReviewExists[0])
      db.update_rating_review([user_id, episode_name, +rating, review]).then(() =>
        res.sendStatus(200)
      );
  
    else
      db.post_rating_and_review([
        user_id,
        episode_name,
        +rating,
        review,
      ]).then(() => res.sendStatus(200));
  },

  getRatings: (req, res) => {
    const db = req.app.get("db");

    db.get_ratings().then((ratings) => {
      console.log(ratings);
      let newArr = [];

      for (let i = 1; i < ratings.length; i++) {
        let total = 0;
        let avg = 0;
        let combined = {
          episode_name: ratings[i].episode_name,
        };

        ratings.forEach((element) => {
          if (ratings[i].episode_name === element.episode_name) {
            avg += 1;
            total += +element.rating;
          }
        });
        combined.rating = (total / avg).toFixed(1);
        newArr.push(combined);
      }

      for (let i = 0; i < newArr.length; i++) {
        for (let j = newArr.length - 1; j > i; j--) {
          if (newArr[i].episode_name === newArr[j].episode_name) {
            newArr.splice(j, 1);
          }
        }
      }
      newArr.sort((a, b) =>
        a.rating.length > b.rating.length ? -1 : a.rating < b.rating ? 1 : -1
      );
      res.status(200).send(newArr);
    });
  },
};
