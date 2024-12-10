import React, { useEffect, useState } from "react";
import "./login.css"; // فایل CSS مرتبط با صفحه Login

const Login = () => {
  const [role, setRole] = useState("player"); // نقش پیش‌فرض

  useEffect(() => {
    // اطمینان از حذف کلاس dark-mode هنگام بارگذاری صفحه
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

  const handleLogin = (event) => {
    event.preventDefault();
    // منطق ورود
    alert(`ورود با نقش: ${role}`);
    // هدایت به صفحه مربوطه بر اساس نقش انتخاب‌شده
    if (role === "player") {
      window.location.href = "/player";
    } else if (role === "designer") {
      window.location.href = "/designer";
    }
  };

  return (
    <div className="main-container">
      <div className="login-box">
        <h2>ورود به سامانه سوال پیچ</h2>
        <form id="loginForm" onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">نام کاربری:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">رمز عبور:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="input-group">
            <label htmlFor="role">نقش خود را انتخاب کنید:</label>
            <select
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="player">بازیکن</option>
              <option value="designer">طراح سوال</option>
            </select>
          </div>
          <button type="submit" className="submit-btn">
            ورود
          </button>
        </form>
        <div className="signup-link">
          <p>
            حساب کاربری ندارید؟ <a href="/signup">ثبت‌نام کنید</a>
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

export default Login;
