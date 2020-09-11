UPDATE ratings
SET rating = $3, review = $4
WHERE episode_name = $2
and user_id = $1