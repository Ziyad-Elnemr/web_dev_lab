const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.json());

const posts = [];

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.listen(3000, () => {
  console.log("server started");
});

app.post("/posts", (req, res) => {
  const post = {
    id: req.body["id"],
    title: req.body["title"],
    content: req.body["content"],
    comments: [req.body.comment],
  };
  posts.push(post);
  console.log(post);
  res.json("Data received");
});

app.get("/posts", (req, res) => {
  console.log("all posts");
  res.json(posts);
});

app.get("/posts/:id", (req, res) => {
  console.log("post id");
  res.json(`Post ID: ${req.params.id}`);
});

app.post("/posts/:id/comments", (req, res) => {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === parseInt(req.params.id)) {
      console.log("Id reached");
      posts[i].comments.push(req.body.comment);
      res.json("Comment added");
      return;
    }
  }
  res.status(404).json("Post not found");
});

app.get("/posts/:id/comments", (req, res) => {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === parseInt(req.params.id)) {
      console.log("Getting comments");
      res.json(posts[i].comments);
      return;
    }
  }
  res.status(404).json("Post not found");
});
