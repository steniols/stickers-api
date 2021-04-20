const express = require("express");
const router = express.Router();

const queries = require("../db/queries");

router.get("/", function (req, res, next) {
  queries.gfetAll().then((stickers) => {
    res.json(stickers);
  });
});

module.exports = router;
