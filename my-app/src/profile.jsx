import React, { useEffect, useState } from "react";
import DesignerNavbar from "./components/DesignerNavbar";
import "./profile.css";

const DesignerProfile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const username = localStorage.getItem("username");

    if (!username) {
      setError("نام کاربری پیدا نشد. لطفاً وارد شوید.");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:8080/user-profile?username=${username}`);
        if (response.ok) {
          const result = await response.json();
          if (result.responseHeader === "OK") {
            setProfile(result.dto);
          } else {
            setError("خطایی در دریافت اطلاعات پروفایل رخ داده است.");
          }
        } else {
          setError("خطا در برقراری ارتباط با سرور.");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError("خطا در برقراری ارتباط با سرور.");
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="main-container">
      <DesignerNavbar />

      <button id="dark-mode-toggle" className="dark-mode-btn" onClick={() => document.body.classList.toggle("dark-mode")}>
        <span id="icon">🌞</span>
      </button>

      <div className="profile-box">
        {error ? (
          <p className="error-message">{error}</p>
        ) : profile ? (
          <>
            <img
              src={require("./pictures/image.png")}
              alt="پروفایل"
              className="profile-img"
            />
            <h2>پروفایل طراح</h2>
            <p>نام کاربری: {profile.username}</p>
            <p>تعداد دنبال‌کنندگان: {profile.follower_count}</p>
            <p>تعداد دنبال‌شده‌ها: {profile.question_count}</p>
            <p>تعداد سوالات طراحی شده: {profile.following_count}</p>
            <p>تعداد سوالات پاسخ داده شده: {profile.answered_count}</p>
            <p>امتیاز کل: {profile.score}</p>
          </>
        ) : (
          <p>در حال بارگذاری...</p>
        )}
      </div>
    </div>
  );
};

export default DesignerProfile;
