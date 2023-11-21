function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const generateQuestionPaper = (totalMarks, difficultyDistribution) => {
  const questions = require("./questionStore").getQuestions();
  let paper = [];
  const marksDistributionDifficulty = {};
  const marks = {
    Easy: 5,
    Medium: 10,
    Hard: 15,
  };

  for (difficulty in difficultyDistribution) {
    marksDistributionDifficulty[difficulty] =
      (difficultyDistribution[difficulty] * totalMarks) / 100;
  }

  const countDistributionDifficulty = {};

  for (difficulty in difficultyDistribution) {
    countDistributionDifficulty[difficulty] =
      marksDistributionDifficulty[difficulty] / marks[difficulty];
  }
  const keysArray = Object.keys(marks);

  for (var i = 0; i <= 2; i++) {
    const filteredArray = questions.filter(
      (obj) => obj["difficulty"] === keysArray[i]
    );
    shuffleArray(filteredArray);
    paper = paper.concat(
      filteredArray.slice(0, countDistributionDifficulty[keysArray[i]])
    );
  }
  return paper;
};

module.exports = {
  generateQuestionPaper,
};
