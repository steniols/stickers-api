module.exports = {
  development: {
    client: "pg",
    connection: "postgres://stickersuser:123456@localhost/stickers",
  },
  test: {
    client: "pg",
    connection: "postgres://stickersuser:123456@localhost/test-stickers",
  },
};
