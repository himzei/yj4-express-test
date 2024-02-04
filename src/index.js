import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({ name: "hello!! 안녕" });
});

app.listen("4000", () => console.log(`server on http://localhost:4000`));
