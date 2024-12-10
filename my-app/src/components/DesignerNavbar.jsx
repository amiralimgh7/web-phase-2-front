import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // استایل‌های مربوط به DesignerNavbar

const DesignerNavbar = () => {
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
    </nav>
  );
};

export default DesignerNavbar;
