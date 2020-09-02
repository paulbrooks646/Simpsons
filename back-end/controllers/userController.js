const bcrypt = require('bcrypt')

module.exports = {

    register: async (req, res) => {
        const db = req.app.get('db')
        const {newUsername, email, newPassword} = req.body

        const existingUser = await db.check_user([email, newUsername])

        if (existingUser[0]) {
            return res.status(409).send("Username or email already exists!")
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(newPassword, salt)

        const newUser = await db.register_user([newUsername, email, hash])

        console.log(newUser)

        req.session.user = {
            id: newUser[0].user_id,
            username: newUser[0].username,
            email: newUser[0].email,
            profile_pic: newUser[0].profile_pic
        }
        res.status(200).send(req.session.user)

    },

    login: (req, res) => {

    },

    getUser: (req, res) => {

    },

    logout: (req, res) => {

    }
}