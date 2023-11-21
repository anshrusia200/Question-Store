// server.js

const express = require("express");
const bodyParser = require("body-parser");
const questionPaperGenerator = require("./questionPaperGenerator");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  return res.sendFile(__dirname + "/public/index.html");
});

app.post("/generate-question-paper", (req, res) => {
  const { totalMarks, difficultyDistribution } = req.body;

  try {
    const questionPaper = questionPaperGenerator.generateQuestionPaper(
      totalMarks,
      difficultyDistribution
      //   topicDistribution
    );
    res.json({ success: true, questionPaper });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
