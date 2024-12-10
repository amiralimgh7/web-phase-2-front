import React, { useEffect, useState } from "react";
import NavbarPlayer from "./components/NavbarPlayer"; // استفاده از PlayerNavbar
import "./player_questions.css"; // استایل‌ها

const PlayerQuestions = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [questions, setQuestions] = useState({
    ریاضی: [
      { question: "2 + 3 چند می‌شود؟", options: ["3", "5", "6", "4"], correct: 2 },
      { question: "تفریق 9 از 13 چند می‌شود؟", options: ["4", "2", "3", "5"], correct: 1 },
    ],
    فیزیک: [
      { question: "جرم زمین چقدر است؟", options: ["5×10^24 کیلوگرم", "6×10^24 کیلوگرم", "7×10^24 کیلوگرم", "10^25 کیلوگرم"], correct: 2 },
      { question: "شتاب جاذبه زمین چند است؟", options: ["9.8 متر بر ثانیه", "8.9 متر بر ثانیه", "9.81 متر بر ثانیه", "7.8 متر بر ثانیه"], correct: 3 },
    ],
    شیمی: [
      { question: "جرم مولی آب چقدر است؟", options: ["18 گرم", "20 گرم", "16 گرم", "22 گرم"], correct: 1 },
      { question: "فرمول شیمیایی نمک چیست؟", options: ["NaCl", "H2O", "CO2", "O2"], correct: 1 },
    ],
  });
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const getRandomQuestion = () => {
    const categories = Object.keys(questions);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const randomQuestion =
      questions[randomCategory][Math.floor(Math.random() * questions[randomCategory].length)];
    setCurrentQuestion({ ...randomQuestion, category: randomCategory });
  };

  const getCategoryQuestion = () => {
    if (selectedCategory) {
      const randomQuestion =
        questions[selectedCategory][
          Math.floor(Math.random() * questions[selectedCategory].length)
        ];
      setCurrentQuestion({ ...randomQuestion, category: selectedCategory });
    } else {
      alert("لطفاً یک دسته‌بندی انتخاب کنید.");
    }
  };

  const handleAnswer = (selectedOption) => {
    if (!currentQuestion) return;

    const isCorrect = selectedOption === currentQuestion.correct;
    const answeredQuestion = {
      ...currentQuestion,
      userAnswer: selectedOption,
      isCorrect,
    };
    setAnsweredQuestions([...answeredQuestions, answeredQuestion]);
    setCurrentQuestion(null);
  };

  return (
    <div className="main-container">
      <NavbarPlayer />

      <button id="dark-mode-toggle" className="dark-mode-btn" onClick={toggleDarkMode}>
        <span id="icon">{darkMode ? "🌜" : "🌞"}</span>
      </button>

      <div className="question-box">
        <h2>پاسخ به سوالات</h2>

        <div className="select-question-method">
          <label htmlFor="category">انتخاب دسته‌بندی سوال:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">انتخاب دسته‌بندی</option>
            {Object.keys(questions).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <button id="category-question-btn" className="btn-primary" onClick={getCategoryQuestion}>
            دریافت سوال از دسته‌بندی
          </button>
          <button id="random-question-btn" className="btn-secondary" onClick={getRandomQuestion}>
            دریافت سوال تصادفی
          </button>
        </div>

        {currentQuestion && (
          <div id="random-question-box" className="question-box">
            <h3>سوال: {currentQuestion.question}</h3>
            <p>دسته‌بندی: {currentQuestion.category}</p>
            <div className="options">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  className="option"
                  onClick={() => handleAnswer(index + 1)}
                >
                  گزینه {index + 1}: {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="questions-container" id="questions-container">
        <h2>سوالات پاسخ داده شده</h2>
        {answeredQuestions.map((answered, index) => (
          <div key={index} className="question-item">
            <h3>سوال: {answered.question}</h3>
            <p>پاسخ شما: گزینه {answered.userAnswer} -{" "}
              {answered.isCorrect ? (
                <span style={{ color: "green" }}>صحیح</span>
              ) : (
                <span style={{ color: "red" }}>غلط</span>
              )}
            </p>
            <p>پاسخ صحیح: گزینه {answered.correct}</p>
            <p>دسته‌بندی: {answered.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerQuestions;
