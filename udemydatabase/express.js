const fs = require("fs");
const express = require("express");
const mongoose = require("mongoose");
const courses = require("./cousesSchema");

const app = express();
app.use(express.json());

const url = "mongodb://localhost:27017/Udemy";

const databaseConnection = async () => {
  try {
    await mongoose.connect(url);
    console.log("success connection");
  } catch (error) {
    console.log(error);
  }
};

databaseConnection();

app.listen(3000, () => {
  console.log("server started");
});



app.post("/courses", async (req, res) => {
  try {
    const newCourse = await courses.create(req.body);
    res.status(201).send(newCourse);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.get("/courses", async (req, res) => {
  try {
    const allCourses = await courses.find();
    res.send(allCourses);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.put("/courses/:id", async (req, res) => {
  try {
    const course = await courses.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!course) {
      return res.status(404).send({ error: "Course not found" });
    }
    res.send(course);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.delete("/courses/:id", async (req, res) => {
  try {
    const course = await courses.findByIdAndDelete(req.params.id);
    if (!course) {
      return res.status(404).send({ error: "Course not found" });
    }
    res.send({ message: "Course deleted successfully", course });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
