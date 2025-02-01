import express from "express";

const app = express();
app.use(express.json());

const port = 5000;

app.get("/", (req, res) => res.json({ msg: "Hello from express" }));

app.listen(port, () =>
  console.log(`Server is listening on port: http://localhost:${port}`)
);
