insert into users (username, email, password)
values ($1, $2, $3);

select * from users
where username = $1