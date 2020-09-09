module.exports = {
  getEpisodes: (req, res) => {
    const db = req.app.get("db");

    db.get_episodes().then(episodes => res.status(200).send(episodes));
    },
    
    getEpisode: (req, res) => {
        const db = req.app.get("db")
        const {episode} = req.params

        db.get_episode(episode).then(episode => res.status(200).send(episode))
    }

};
