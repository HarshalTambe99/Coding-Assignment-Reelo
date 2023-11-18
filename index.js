// index.js

const QuestionStore = require('./questore');
const QuestionPaperGenerator = require('./quepaper');

// Sample data
const sampleQuestionData = [
  { question: "Question 1", subject: "Physics", topic: "Waves", difficulty: "Easy", marks: 5 },
  // Add more questions as needed
];

// Initialize Question Store
const questionStore = new QuestionStore();

// Populate Question Store with sample data
sampleQuestionData.forEach(question => questionStore.addQuestion(question));

// Initialize Question Paper Generator
const questionPaperGenerator = new QuestionPaperGenerator(questionStore);

// Generate question paper
const totalMarks = 100;
const difficultyDistribution = { Easy: 20, Medium: 50, Hard: 30 };

const questionPaper = questionPaperGenerator.generateQuestionPaper(totalMarks, difficultyDistribution);

// Display generated question paper
console.log("Generated Question Paper:");
questionPaper.forEach((question, index) => {
  console.log(`${index + 1}. ${question.question} (${question.difficulty}, ${question.marks} marks)`);
});
