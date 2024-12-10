import React from "react";
import DesignerNavbar from "./components/DesignerNavbar"; // ایمپورت DesignerNavbar
import "./designer.css"; // استایل‌های صفحه Designer

const Designer = () => {
  return (
    <div className="designer-container">
      {/* استفاده از DesignerNavbar */}
      <DesignerNavbar />
      
      {/* محتوای اصلی صفحه طراح */}
      <div className="designer-content">
        <h1>صفحه طراح</h1>
        <p>به صفحه مدیریت دسته‌بندی‌ها و سوالات خوش آمدید!</p>
      </div>
    </div>
  );
};

export default Designer;
