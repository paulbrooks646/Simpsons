update users
set username = $2, email = $3, password = $4, profile_pic = $5
where user_id = $1