const request = require("supertest");
const knex = require("../db/knex");
const expect = require("chai").expect;
const app = require("../app");
const fixtures = require("./fixtures");
describe("CRUD Stickers", () => {
  before((done) => {
    //run migrations
    knex.migrate
      .latest()
      .then(() => {
        // run seeds
        return knex.seed.run();
      })
      .then(() => done());
  });
  it("List all records", (done) => {
    request(app)
      .get("/api/v1/stickers")
      .auth("username", "password")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a("array");
        expect(response.body).to.deep.equal(fixtures.stickers);
        done();
      });
  });
});
