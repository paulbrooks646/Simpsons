module.exports = {
  getEpisodes: (req, res) => {
    const db = req.app.get("db");

    db.get_episodes().then((episodes) => res.status(200).send(episodes));
  },
};
