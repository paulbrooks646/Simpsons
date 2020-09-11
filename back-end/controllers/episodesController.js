module.exports = {

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

  getEpisodes: (req, res) => {
    const db = req.app.get("db");

    db.get_episodes().then((ratings) => {
      let newArr = [];

      for (let i = 0; i < ratings.length; i++) {
        let total = 0;
        let avg = 0;
        let combined = {
          episode_name: ratings[i].episode_name,
          episode_id: ratings[i].episode_id,
          episode_synopsis: ratings[i].episode_synopsis,
          episode_image: ratings[i].episode_image,
          season: ratings[i].season,
          air_date: ratings[i].air_date,
          episode_quote: ratings[i].episode_quote,
          ratings_reviews_id: ratings[i].ratings_reviews_id,
          user_id: ratings[i].user_id,
          reviews: []
        };

        ratings.forEach((element) => {
          if (ratings[i].episode_name === element.episode_name) {
            avg += 1;
            total += +element.rating;
            combined.reviews.push(element.review)
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
