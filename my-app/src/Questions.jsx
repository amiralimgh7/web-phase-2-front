import React, { useState, useEffect } from "react";
import DesignerNavbar from "./components/DesignerNavbar"; // استفاده از DesignerNavbar
import "./questions.css"; // استایل‌های صفحه سوالات

const Questions = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [questions, setQuestions] = useState([
    {
      text: "3+2 چقدر می‌شود؟",
      options: ["3", "5", "6", "4"],
      correct: 2,
      category: "ریاضی",
      difficulty: "آسان",
    },
    {
      text: "جرم زمین چقدر است؟",
      options: ["10^24 کیلوگرم", "6×10^24 کیلوگرم", "5×10^24 کیلوگرم", "7×10^24 کیلوگرم"],
      correct: 2,
      category: "فیزیک",
      difficulty: "سخت",
    },
  ]);

  const [newQuestion, setNewQuestion] = useState({
    text: "",
    options: ["", "", "", ""],
    correct: "1",
    category: "ریاضی",
    difficulty: "آسان",
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("option")) {
      const index = parseInt(name.replace("option", "")) - 1;
      const updatedOptions = [...newQuestion.options];
      updatedOptions[index] = value;
      setNewQuestion({ ...newQuestion, options: updatedOptions });
    } else {
      setNewQuestion({ ...newQuestion, [name]: value });
    }
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { ...newQuestion, correct: parseInt(newQuestion.correct) }]);
    setNewQuestion({
      text: "",
      options: ["", "", "", ""],
      correct: "1",
      category: "ریاضی",
      difficulty: "آسان",
    });
  };

  return (
    <div className="main-container">
      <DesignerNavbar />

      {/* دکمه تغییر حالت تاریک */}
      <button id="dark-mode-toggle" className="dark-mode-btn" onClick={handleToggleDarkMode}>
        <span id="icon">{darkMode ? "🌜" : "🌞"}</span>
      </button>

      {/* بخش مدیریت سوالات */}
      <div className="question-box">
        <h2>مدیریت سوالات</h2>

        {/* افزودن سوال جدید */}
        <div className="add-question">
          <textarea
            id="question-text"
            name="text"
            placeholder="متن سوال"
            rows="3"
            value={newQuestion.text}
            onChange={handleInputChange}
          ></textarea>
          {newQuestion.options.map((option, index) => (
            <input
              key={index}
              type="text"
              name={`option${index + 1}`}
              placeholder={`گزینه ${index + 1}`}
              value={option}
              onChange={handleInputChange}
            />
          ))}
          <label htmlFor="correct-answer">پاسخ صحیح:</label>
          <select
            id="correct-answer"
            name="correct"
            value={newQuestion.correct}
            onChange={handleInputChange}
          >
            {newQuestion.options.map((_, index) => (
              <option key={index + 1} value={index + 1}>
                گزینه {index + 1}
              </option>
            ))}
          </select>

          <label htmlFor="category">دسته‌بندی سوال:</label>
          <select
            id="category"
            name="category"
            value={newQuestion.category}
            onChange={handleInputChange}
          >
            <option value="ریاضی">ریاضی</option>
            <option value="فیزیک">فیزیک</option>
            <option value="شیمی">شیمی</option>
          </select>

          <label htmlFor="difficulty">درجه دشواری:</label>
          <select
            id="difficulty"
            name="difficulty"
            value={newQuestion.difficulty}
            onChange={handleInputChange}
          >
            <option value="آسان">آسان</option>
            <option value="متوسط">متوسط</option>
            <option value="سخت">سخت</option>
          </select>

          <button id="add-question-btn" onClick={handleAddQuestion}>
            افزودن سوال
          </button>
        </div>

        {/* نمایش سوالات */}
        <div className="questions-container" id="questions-container">
          {questions.map((q, index) => (
            <div key={index} className="question-item">
              <h3>متن سوال: {q.text}</h3>
              {q.options.map((option, i) => (
                <p key={i} style={i + 1 === q.correct ? { color: "green" } : {}}>
                  گزینه {i + 1}: {option}
                </p>
              ))}
              <p>دسته‌بندی: {q.category}</p>
              <p>درجه دشواری: {q.difficulty}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
