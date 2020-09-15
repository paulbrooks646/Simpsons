UPDATE ratings_reviews
SET rating = $3, review = $4, username = $5, profile_pic = $6
WHERE episode_name = $2
and user_id = $1