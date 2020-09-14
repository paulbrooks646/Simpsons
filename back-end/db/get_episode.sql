select episodes.*, ratings_reviews.*
from episodes
inner join ratings_reviews on episodes.episode_name=ratings_reviews.episode_name
where episodes.episode_name = $1