const request = require("supertest");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

test("GET /", async () => {
  const response = await request(app).get("/");
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe("Hello World!");
});
