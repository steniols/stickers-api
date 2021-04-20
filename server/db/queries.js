const knex = require("./knex"); // the connection!

module.exports = {
  gfetAll() {
    return knex("sticker"); // select all registers
  },
};
