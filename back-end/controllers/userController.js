const bcrypt = require("bcrypt");

module.exports = {
  register: async (req, res) => {
    const db = req.app.get("db");
    const { newUsername, email, newPassword } = req.body;

    const existingUser = await db.check_user([email, newUsername]);

    if (existingUser[0]) {
      return res.status(409).send("Username or email already exists!");
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(newPassword, salt);

    const newUser = await db.register_user([newUsername, email, hash]);

    req.session.user = {
      id: newUser[0].user_id,
      username: newUser[0].username,
      email: newUser[0].email,
      profile_pic: newUser[0].profile_pic,
    };
    res.status(200).send(req.session.user);
  },

  login: async (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    const user = await db.check_user([username, username]);

    if (!user[0]) {
      return res.status(409).send("User doesn't exist!");
    } else {
      const authenticated = bcrypt.compareSync(password, user[0].password);
      if (authenticated) {
        req.session.user = {
          id: user[0].user_id,
          username: user[0].username,
          email: user[0].email,
          profile_pic: user[0].profile_pic,
        };
        res.status(200).send(req.session.user);
      } else {
        res.status(409).send("Username or password incorrect!");
      }
    }
  },

  getUser: (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user);
    } else {
      res.sendStatus(404);
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },

  update: (req, res) => {
    const db = req.app.get("db");
    const { user_id } = req.params;
    const {
      updatedUsername,
      updatedEmail,
      updatedPic,
    } = req.body;

    db.update_info([user_id, updatedUsername, updatedEmail, updatedPic])
    res.sendStatus(200)
  },
};
