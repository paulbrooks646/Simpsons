update users
set username = $2, email = $3, profile_pic = $4
where user_id = $1