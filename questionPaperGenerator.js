function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function roundOffNumber(number) {
  const decimalPart = number - Math.floor(number);

  if (decimalPart < 0.5) {
    return Math.floor(number);
  } else {
    return Math.ceil(number);
  }
}

const generateQuestionPaperOnlyDifficulty = (
  totalMarks,
  difficultyDistribution
) => {
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

const generateQuestionPaper = (
  totalMarks,
  difficultyDistribution,
  subjectDistribution
) => {
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
    countDistributionDifficulty[difficulty] = roundOffNumber(
      marksDistributionDifficulty[difficulty] / marks[difficulty]
    );
  }
  const keysArray = Object.keys(marks);
  console.log(keysArray);
  for (var i = 0; i <= 2; i++) {
    let difficultyCountLeft = countDistributionDifficulty[keysArray[i]];
    for (subject in subjectDistribution) {
      console.log(subject);
      const subjectCount = Math.min(
        roundOffNumber(
          (countDistributionDifficulty[keysArray[i]] *
            subjectDistribution[subject]) /
            100
        ),
        difficultyCountLeft
      );
      difficultyCountLeft -= subjectCount;
      const filteredArray = questions.filter(
        (obj) =>
          obj["difficulty"] === keysArray[i] && obj["subject"] === subject
      );
      shuffleArray(filteredArray);
      paper = paper.concat(filteredArray.slice(0, subjectCount));
    }
  }
  return paper;
};

module.exports = {
  generateQuestionPaperOnlyDifficulty,
  generateQuestionPaper,
};
