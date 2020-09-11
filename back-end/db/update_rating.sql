UPDATE ratings
SET rating = $3
WHERE episode_name = $2
and user_id = $1