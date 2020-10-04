const db = require("../models");

module.exports = {
  getGymnasts: function (req, res) {
    db.Gymnast
      .find()
      .sort({name: 1})
      .then(dbGymnasts => res.json(dbGymnasts))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)});
  }

  
}