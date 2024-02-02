import express from "express";

const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.send(`This is the home page`);
});

app.listen(PORT, (req, res) => {
  console.log(`App is listening on port ${PORT}`);
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "joke 1",
      content: "This is joke 1",
    },
    {
      id: 2,
      title: "joke 2",
      content: "This is joke 2",
    },
    {
      id: 3,
      title: "joke 3",
      content: "This is joke 3",
    },
  ];
  res.send(jokes);
});
