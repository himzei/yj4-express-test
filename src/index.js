import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({ name: "hello!!" });
});

app.listen("3000", () => console.log(`server on http://localhost:3000`));
