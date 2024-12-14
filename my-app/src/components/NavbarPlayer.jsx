import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const NavbarPlayer = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/");
  };

  return (
    <nav className="menu">
      {/* <div className="menu-section">
        <Link to="/player/profile" id="profile-link">
          پروفایل
        </Link>
      </div> */}
      <div className="menu-section">
        <Link to="/player/profile/main" id="profile-link">
          پروفایل
        </Link>
      </div>
      <div className="menu-section">
        <Link to="/player/questions" id="questions-link">
          سوالات
        </Link>
      </div>
      <div className="menu-section">
        <Link to="/player/leaderboard" id="leaderboard-link">
          جدول امتیازات
        </Link>
      </div>
      <div className="menu-section logout">
        <button onClick={handleLogout} id="logout-button">
          خروج
        </button>
      </div>
    </nav>
  );
};

export default NavbarPlayer;
