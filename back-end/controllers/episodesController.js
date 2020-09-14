module.exports = {

  getEpisode: (req, res) => {
    const db = req.app.get("db");
    const { episode } = req.params;

    db.get_episode(episode).then((episodes) => {
      let newArr = [];

      for (let i = 0; i < episodes.length; i++) {
        let total = 0;
        let avg = 0;
        let combined = {
          episode_name: episodes[i].episode_name,
          episode_id: episodes[i].episode_id,
          episode_synopsis: episodes[i].episode_synopsis,
          episode_image: episodes[i].episode_image,
          season: episodes[i].season,
          air_date: episodes[i].air_date,
          episode_quote: episodes[i].episode_quote,
          ratings_reviews_id: episodes[i].ratings_reviews_id,
          user_id: episodes[i].user_id,
          reviews: [],
        };

        episodes.forEach((element) => {
          if (episodes[i].episode_name === element.episode_name) {
            avg += 1;
            total += +element.rating;
            combined.reviews.push(element.review);
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
      res.status(200).send(newArr);
    });
  },

  updateRatingAndReview: async (req, res) => {
    const db = req.app.get("db");
    console.log(req.body)
    console.log(req.params)
    const { user_id } = req.params;
    const { rating, review, episode_name } = req.body;
    const ratingReviewExists = await db.check_existing_rating_review([
      user_id,
      episode_name,
    ]);
    console.log(ratingReviewExists)
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

    db.get_episodes().then((episodes) => {
      let newArr = [];

      for (let i = 0; i < episodes.length; i++) {
        let total = 0;
        let avg = 0;
        let combined = {
          episode_name: episodes[i].episode_name,
          episode_id: episodes[i].episode_id,
          episode_synopsis: episodes[i].episode_synopsis,
          episode_image: episodes[i].episode_image,
          season: episodes[i].season,
          air_date: episodes[i].air_date,
          episode_quote: episodes[i].episode_quote,
          ratings_reviews_id: episodes[i].ratings_reviews_id,
          user_id: episodes[i].user_id,
          reviews: []
        };

        episodes.forEach((element) => {
          if (episodes[i].episode_name === element.episode_name) {
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
              a.episode_id.length < b.episode_id.length
                ? -1
                : a.episode_id > b.episode_id
                ? 1
                : -1
            );
      res.status(200).send(newArr);
    });
  },

  addToWatchlist: (req, res) => {
    const db = req.app.get("db")
    console.log(req.body)

    const { user_id } = req.params
    const { episode_name } = req.body
    
    db.add_to_watchlist([+user_id, episode_name]).then(() => {
      res.sendStatus(200)
    })
  }
};
