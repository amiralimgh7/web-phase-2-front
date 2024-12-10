import React, { useEffect } from "react";
import DesignerNavbar from "./components/DesignerNavbar"; // استفاده از DesignerNavbar
import "./profile.css"; // استایل‌های صفحه پروفایل

const DesignerProfile = () => {
  useEffect(() => {
    // مدیریت حالت تاریک
    const toggleDarkMode = () => {
      document.body.classList.toggle("dark-mode");
      const icon = document.getElementById("icon");
      if (document.body.classList.contains("dark-mode")) {
        icon.textContent = "🌜";
      } else {
        icon.textContent = "🌞";
      }
    };

    const darkModeButton = document.getElementById("dark-mode-toggle");
    if (darkModeButton) {
      darkModeButton.addEventListener("click", toggleDarkMode);
    }

    return () => {
      if (darkModeButton) {
        darkModeButton.removeEventListener("click", toggleDarkMode);
      }
    };
  }, []);

  return (
    <div className="main-container">
      {/* استفاده از DesignerNavbar */}
      <DesignerNavbar />

      {/* دکمه تغییر حالت تاریک */}
      <button id="dark-mode-toggle" className="dark-mode-btn">
        <span id="icon">🌞</span>
      </button>

      {/* محتوای پروفایل */}
      <div className="profile-box">
        <img
          src={require("./pictures/image.png")}
          alt="پروفایل"
          className="profile-img"
        />
        <h2>پروفایل طراح</h2>
        <p>نام: علی احمدی</p>
        <p>تعداد سوالات طراحی شده: 25</p>
        <p>تعداد فالوورها: 100</p>
        <p>تعداد دنبال‌شده‌ها: 50</p>
        <p className="email">ایمیل: ali.ahmadi@example.com</p>
      </div>
    </div>
  );
};

export default DesignerProfile;
