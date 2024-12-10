import React, { useState, useEffect } from "react";
import DesignerNavbar from "./components/DesignerNavbar"; // استفاده از DesignerNavbar
import "./categories.css"; // استایل‌های صفحه دسته‌بندی‌ها

const Categories = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [categories, setCategories] = useState([
    { name: "ریاضی", questions: 10 },
    { name: "فیزیک", questions: 8 },
    { name: "شیمی", questions: 12 },
  ]);
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleAddCategory = () => {
    if (newCategory.trim() !== "") {
      setCategories([...categories, { name: newCategory, questions: 0 }]);
      setNewCategory("");
    }
  };

  return (
    <div className="main-container">
      <DesignerNavbar />

      {/* دکمه تغییر حالت تاریک */}
      <button id="dark-mode-toggle" className="dark-mode-btn" onClick={handleToggleDarkMode}>
        <span id="icon">{darkMode ? "🌜" : "🌞"}</span>
      </button>

      {/* بخش مدیریت دسته‌بندی */}
      <div className="category-box">
        <h2>مدیریت دسته‌بندی‌ها</h2>

        {/* افزودن دسته جدید */}
        <div className="add-category">
          <input
            type="text"
            id="new-category"
            placeholder="نام دسته جدید"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button id="add-category-btn" onClick={handleAddCategory}>
            افزودن دسته
          </button>
        </div>

        {/* نمایش دسته‌ها */}
        <div className="categories-container" id="categories-container">
          {categories.map((category, index) => (
            <div key={index} className="category-item">
              <h3>{category.name}</h3>
              <p>تعداد سوالات: {category.questions}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
