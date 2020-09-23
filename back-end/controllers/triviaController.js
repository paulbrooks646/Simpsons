const getTrivia = (req, res) => {
  const db = req.app.get("db");

  db.get_trivia().then((trivia) => res.status(200).send(trivia));
};

exports.getTrivia = getTrivia;
