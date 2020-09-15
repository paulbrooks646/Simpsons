const getEpisode = (req, res) => {
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
          combined.reviews.push([
            element.rating,
            element.review,
            element.username,
            element.profile_pic,
          ]);
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
};

const updateRatingAndReview = async (req, res) => {
  const db = req.app.get("db");
  console.log(req.body);

  const { user_id } = req.params;
  const { rating, review, episode_name, username, profile_pic } = req.body;
  console.log(username, profile_pic);

  const ratingReviewExists = await db.check_existing_rating_review([
    user_id,
    episode_name,
  ]);

  if (ratingReviewExists[0])
    db.update_rating_review([user_id, episode_name, +rating, review, username, profile_pic]).then(() =>
      res.sendStatus(200)
    );
  else
    db.post_rating_and_review([
      user_id,
      episode_name,
      +rating,
      review,
      username,
      profile_pic,
    ]).then(() => res.sendStatus(200));
};

const getEpisodes = (req, res) => {
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
        reviews: [],
      };

      episodes.forEach((element) => {
        if (episodes[i].episode_name === element.episode_name) {
          avg += 1;
          total += +element.rating;
          combined.reviews.push([
            element.review,
            element.username,
            element.profile_pic,
          ]);
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
};

const addToWatchlist = async (req, res) => {
  const db = req.app.get("db");

  const { user_id } = req.params;
  const { episode_name } = req.body;

  const alreadyOnWatchlist = await db.already_on_watchlist([
    user_id,
    episode_name,
  ]);

  if (!alreadyOnWatchlist.length) {
    db.add_to_watchlist([+user_id, episode_name]).then(() => {
      res.sendStatus(200);
    });
  }
};

const getWatchlist = (req, res) => {
  const db = req.app.get("db");
  const { user_id } = req.params;

  db.get_watchlist(user_id).then((watchlist) => {
    return res.status(200).send(watchlist);
  });
};

const deleteFromWatchlist = (req, res) => {
  const db = req.app.get("db");
  const { id } = req.session.user;
  const { episode_name } = req.params;

  db.delete_from_watchlist([id, episode_name]).then(() => res.sendStatus(200));
};

const addToFavorites = async (req, res) => {
  const db = req.app.get("db");

  const { user_id } = req.params;
  const { episode_name } = req.body;

  const alreadyOnFavorites = await db.already_on_favorites([
    user_id,
    episode_name,
  ]);

  if (!alreadyOnFavorites.length)
    db.add_to_favorites([+user_id, episode_name]).then(() => {
      res.sendStatus(200);
    });
};

const removeFromFavorites = (req, res) => {
  const db = req.app.get("db");
  const { id } = req.session.user;
  const { episode_name } = req.params;

  db.remove_from_favorites([id, episode_name]).then(() => res.sendStatus(200));
};

const getFavorites = (req, res) => {
  const db = req.app.get("db");
  const { user_id } = req.params;

  db.get_favorites(user_id).then((watchlist) => {
    return res.status(200).send(watchlist);
  });
};

exports.getEpisode = getEpisode;
exports.updateRatingAndReview = updateRatingAndReview;
exports.getEpisodes = getEpisodes;
exports.addToWatchlist = addToWatchlist;
exports.getWatchlist = getWatchlist;
exports.deleteFromWatchlist = deleteFromWatchlist;
exports.addToFavorites = addToFavorites;
exports.removeFromFavorites = removeFromFavorites;
exports.getFavorites = getFavorites;
