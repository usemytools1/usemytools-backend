const supertest = require("supertest");
const toolsRouter = require("../api/server.js");

describe("create route", () => {
  it("404 with invalid body", async () => {
    const response = await supertest(toolsRouter)
      .post("/")
      .send({
        somethingElse: "invalid data"
      });
    expect(response.status).toBe(404);
  });

  it("returns an id with post", async () => {
    const response = await supertest(toolsRouter)
      .post("/")
      .send({
        id: 11,
        tool_name: "Miter Saw",
        user_id: 1,
        borrower_id: 3
      });
    expect(response.body.length).toBe(undefined);
  });
});

describe("delete route", () => {
  it("404 when tool doesnt exist", async () => {
    const response = await supertest(toolsRouter).delete("/60");
    expect(response.status).toBe(404);
  });
});
