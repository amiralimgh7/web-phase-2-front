import React, { useEffect } from "react";
import NavbarPlayer from "./components/NavbarPlayer"; // استفاده از NavbarPlayer
import "./profile.css"; // استایل‌های صفحه پروفایل

const PlayerProfile = () => {
  useEffect(() => {
    // حذف کلاس dark-mode هنگام بارگذاری صفحه
    document.body.classList.remove("dark-mode");
  }, []);

  const handleToggleDarkMode = () => {
    const icon = document.getElementById("icon");
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");
      if (icon) icon.textContent = "🌞";
    } else {
      document.body.classList.add("dark-mode");
      if (icon) icon.textContent = "🌜";
    }
  };

  return (
    <div className="main-container">
      {/* استفاده از PlayerNavbar */}
      <NavbarPlayer />

      {/* دکمه تغییر حالت تاریک */}
      <button id="dark-mode-toggle" className="dark-mode-btn" onClick={handleToggleDarkMode}>
        <span id="icon">🌞</span>
      </button>

      {/* محتوای پروفایل */}
      <div className="profile-box">
        <img
           src={require("./pictures/image.png")}// مسیر مطمئن برای عکس پروفایل بازیکن
          alt="پروفایل بازیکن"
          className="profile-img"
        />
        <h2>پروفایل بازیکن</h2>
        <p>نام: محمد رضایی</p>
        <p>امتیاز کل: 1200</p>
        <p>رتبه: 15</p>
        <p>بازی‌های انجام شده: 35</p>
        <p>برد‌ها: 20</p>
        <p>باخت‌ها: 15</p>
      </div>
    </div>
  );
};

export default PlayerProfile;
