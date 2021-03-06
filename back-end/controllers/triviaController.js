const getTrivia = (req, res) => {
  const db = req.app.get("db");

  const { quiz_number } = req.params;

  db.get_trivia(quiz_number).then((trivia) => res.status(200).send(trivia));
};

const getPersonalityTest = (req, res) => {
    const db = req.app.get("db");

    db.get_personality_test().then((test) => res.status(200).send(test))
}

const getNextQuestion = (req, res) => {
  const db = req.app.get("db");

  const { next_question } = req.params

  db.get_next_question(+next_question).then((question) => res.status(200).send(question))
}

exports.getTrivia = getTrivia;
exports.getPersonalityTest = getPersonalityTest
exports.getNextQuestion = getNextQuestion
