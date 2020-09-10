INSERT INTO RATINGS (user_id, episode_name, rating)
VALUES ($1, $2, $3);

INSERT INTO REVIEWS (user_id, episode_name, review)
VALUES ($1, $2, $4);