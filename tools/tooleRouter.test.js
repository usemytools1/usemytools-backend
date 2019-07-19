const supertest = require("supertest");
const toolsRouter = require("../api/server.js");

describe("create route", () => {
    it("201 with valid body", async () => {
        const response = await supertest(toolsRouter).post("/").send({

            tool_name: "Miter Saw",
            user_id: 1,
            borrower_id: 3
        });
        expect(response.status).toBe(201);
    });
    it("404 with invalid body", async () => {
        const response = await supertest(toolsRouter).post("/").send({
            somethingElse: "invalid data"
        });
        expect(response.status).toBe(404);
    });

    it("returns an id with post", async () => {
        const response = await supertest(toolsRouter).post("/").send({
            id: 11,
            tool_name: "Miter Saw",
            user_id: 1,
            borrower_id: 3
        });
        expect(response.body.length).toBe(undefined);
    });
});

describe("delete route", () => {
    it("200 upon delete and body toEqual 1", async () => {
        const response = await supertest(toolsRouter).delete("/8");
        // console.log(response)
        expect(response.status).toBe(200);
        // expect(response.body).toBe(1);
    });
    it("404 when tool doesnt exist", async () => {
        const response = await supertest(toolsRouter).delete("/60");
        expect(response.status).toBe(404);
    });
});