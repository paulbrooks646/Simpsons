select episodes.*, ratings_reviews.ratings_reviews_id, ratings_reviews.user_id, ratings_reviews.rating, ratings_reviews.review, ratings_reviews.username, ratings_reviews.profile_pic 
from episodes
left outer join ratings_reviews on episodes.episode_name=ratings_reviews.episode_name