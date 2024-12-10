import React, { useEffect } from "react";
import "./signup.css";

const Signup = () => {
  useEffect(() => {
    // حذف کلاس dark-mode هنگام بارگذاری
    document.body.classList.remove("dark-mode");
  }, []);

  const handleToggleDarkMode = () => {
    // اضافه یا حذف کردن کلاس dark-mode
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // عملیات ثبت‌نام
    alert("ثبت‌نام با موفقیت انجام شد!");
    // هدایت به صفحه ورود
    window.location.href = "/login";
  };

  return (
    <div className="main-container">
      <div className="signup-box">
        <h2>ثبت‌نام در سامانه سوال پیچ</h2>
        <form id="signupForm" onSubmit={handleFormSubmit}>
          <div className="input-group">
            <label htmlFor="email">ایمیل:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="username">نام کاربری:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">رمز عبور:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">تأیید رمز عبور:</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="role">نقش خود را انتخاب کنید:</label>
            <select id="role" name="role" required>
              <option value="player">بازیکن</option>
              <option value="designer">طراح سوال</option>
            </select>
          </div>
          <button type="submit" className="submit-btn">
            ثبت‌نام
          </button>
        </form>
        <div className="login-link">
          <p>
            حساب کاربری دارید؟ <a href="/login">وارد شوید</a>
          </p>
        </div>

        {/* دکمه تغییر حالت تاریک */}
        <button
          id="dark-mode-toggle"
          className="dark-mode-btn"
          onClick={handleToggleDarkMode}
        >
          <span id="icon">🌞</span>
        </button>
      </div>
    </div>
  );
};

export default Signup;
