delete from watchlist
where user_id = $1 and episode_name = $2;