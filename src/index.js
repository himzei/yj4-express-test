import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({ name: "hello!! 안녕 안녕하세요 조현일입니다 반가워요" });
});

app.listen("3000", () => console.log(`server on http://localhost:3000`));
