import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const DesignerNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");

    navigate("/signup");
  };

  return (
    <nav className="menu">
      <div className="menu-section">
        <Link to="/designer/profile" id="profile-link">پروفایل</Link>
      </div>
      <div className="menu-section">
        <Link to="/designer/categories" id="category-link">مدیریت دسته‌بندی‌ها</Link>
      </div>
      <div className="menu-section">
        <Link to="/designer/questions" id="questions-link">مدیریت سوالات</Link>
      </div>
      <div className="menu-section">
        {/* دکمه خروج */}
        <button id="logout-button" onClick={handleLogout}>
          خروج
        </button>
      </div>
    </nav>
  );
};

export default DesignerNavbar;
