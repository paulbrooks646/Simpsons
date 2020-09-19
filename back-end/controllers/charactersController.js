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
    if (info.length) {
      res.status(200).send(info);
    } else {
      res.status(404).send('Character not found')
    }
  })
};

exports.getCharacters = getCharacters;
exports.getCharacter = getCharacter;
