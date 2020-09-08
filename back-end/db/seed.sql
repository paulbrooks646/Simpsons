create table users (
user_id serial,
username varchar(30),
email varchar(50),
password text,
profile_pic text
)

insert into episodes (episode_name, episode_image, episode_synopsis, season, air_date, episode_quote)
values ('Simpsons Roasting on an Open Fire', 'https://vignette.wikia.nocookie.net/simpsons/images/1/1f/Simpsons_roasting_on_a_open_fire_-2015-01-03-11h45m54s237.jpg/revision/latest/scale-to-width-down/185?cb=20150103180404', 'Its a not-so-merry Christmas for the Simpsons. Mr. Burns plans to cut Christmas bonuses, Marge has to spend the familys Christmas savings to erase a tattoo Bart thought would make a great Christmas present, and when Homer learns he wont be getting a Christmas bonus, life in Springfield gets even tighter. So whats a breadwinner to do, except take a second job as a shopping mall Santa?', 1, '1989-12-17', 'Homer: Thirteen bucks? Hey, wait a minute!
Clerk: Thats right. One hundred and twenty dollars gross, less social security, less unemployment insurance, less Santa training, less costume purchase, less beard rental, less Christmas club. See you next year.' )