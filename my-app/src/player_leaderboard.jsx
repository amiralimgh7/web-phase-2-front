import React, { useEffect } from "react";
import NavbarPlayer from "./components/NavbarPlayer"; // استفاده از PlayerNavbar
import "./player_leaderboard.css"; // استایل‌های صفحه جدول امتیازات

const PlayerLeaderboard = () => {
  useEffect(() => {
    // تنظیم حالت تاریک
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

  const leaderboardData = [
    { rank: 1, name: "علی احمدی", score: 1500, image: require("./pictures/1.jpg") },
    { rank: 2, name: "رضا مرادی", score: 1400, image: require("./pictures/2.jpg") },
    { rank: 3, name: "سارا فاطمی", score: 1300, image: require("./pictures/5.jpg") },
    { rank: 4, name: "مهدی رضایی", score: 1200, image: require("./pictures/3.jpg") },
  ];
  

  return (
    <div className="main-container">
      {/* استفاده از PlayerNavbar */}
      <NavbarPlayer />

      {/* دکمه تغییر حالت تاریک */}
      <button id="dark-mode-toggle" className="dark-mode-btn">
        <span id="icon">🌞</span>
      </button>

      {/* بخش جدول امتیازات */}
      <div className="leaderboard">
        <h2>جدول امتیازات</h2>
        <table>
          <thead>
            <tr>
              <th>رتبه</th>
              <th>عکس پروفایل</th>
              <th>نام</th>
              <th>امتیاز</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((player, index) => (
              <tr key={index}>
                <td>{player.rank}</td>
                <td>
                  <img
                    src={player.image}
                    alt={`پروفایل بازیکن ${player.rank}`}
                    className="profile-img"
                  />
                </td>
                <td>{player.name}</td>
                <td>{player.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlayerLeaderboard;
