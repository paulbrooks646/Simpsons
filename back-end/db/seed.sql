create table users (
user_id serial,
username varchar(30),
email varchar(50),
password text,
profile_pic text
)

insert into episodes (episode_name, episode_image, episode_synopsis, season, air_date, episode_quote)
values ('', '', '', 1, '1989-12-17', '' )

create table watchlist (
watchlist_id serial,
user_id integer,
episode_name text
)

create table favorites (
favorites_id serial,
user_id integer,
episode_name text
)

insert into ratings_reviews (user_id, episode_name, rating, review, username, profile_pic)
values (,,,,,)

insert into characters (name, picture, description, quote, voice_actor, first_appearance)
values (,,,,,)

create table trivia (
question_id serial,
question text,
option_one text,
option_two text,
option_three text,
option_four text,
answer text
)

create table personality_test_questions (
personality_test_id serial,
question text,
option_one text,
option_two text,
question_picture text
)