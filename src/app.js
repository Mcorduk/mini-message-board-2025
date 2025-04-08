import express from "express";
import mainRouter from "../routes/index.js";

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello, world!");
});

app.use(mainRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
