delete from favorites
where user_id = $1 and episode_name = $2;