const getTrivia = (req, res) => {
  const db = req.app.get("db");

  const { quiz_number } = req.params;

  db.get_trivia(quiz_number).then((trivia) => res.status(200).send(trivia));
};

exports.getTrivia = getTrivia;
