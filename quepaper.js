// src/questionPaperGenerator.js

class QuestionPaperGenerator {
    constructor(questionStore) {
      this.questionStore = questionStore;
    }
  
    generateQuestionPaper(totalMarks, difficultyDistribution) {
      const questionPaper = [];
      let remainingMarks = totalMarks;
  
      Object.entries(difficultyDistribution).forEach(([difficulty, percentage]) => {
        const difficultyQuestions = this.questionStore.getQuestionsByDifficulty(difficulty);
        const requiredMarks = Math.ceil(totalMarks * (percentage / 100));
  
        const selectedQuestions = this.getRandomQuestions(difficultyQuestions, requiredMarks);
        questionPaper.push(...selectedQuestions);
  
        remainingMarks -= requiredMarks;
      });
  
      if (remainingMarks > 0) {
        console.warn(`Warning: ${remainingMarks} marks could not be allocated.`);
      }
  
      return questionPaper;
    }
  
    getRandomQuestions(questions, count) {
      const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
      return shuffledQuestions.slice(0, count);
    }
  }
  
  module.exports = QuestionPaperGenerator;
  