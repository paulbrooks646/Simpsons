const getCharacters = (req, res) => {
  const db = req.app.get("db");

  db.get_characters().then((characters) => {
    return res.status(200).send(characters);
  });
};

const getCharacter = (req, res) => {
  const db = req.app.get("db");
  const { character } = req.params;

  db.get_character(character).then((info) => {
    res.status(200).send(info);
  });
};

exports.getCharacters = getCharacters;
exports.getCharacter = getCharacter;
