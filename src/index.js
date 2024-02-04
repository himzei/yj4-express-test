import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({ name: "hello!! 안녕 안녕하세요 조현일입니다 " });
});

app.listen("4000", () => console.log(`server on http://localhost:4000`));
