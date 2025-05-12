import React from "react";
import { Link } from "react-router-dom";
import './Settingbar.css';
//import profileIcon from "../icons/lucide/profileIcon.svg";

const Settingbar = () => {
  return (
    <div className="settingbar">
      <div className="settingbar-title">설정</div>
      <ul className="settingbar-menu">
        <li>
          <Link to="/Setting" className="settingbar-menu-btn">프로필</Link>
        </li>
        <li>
          <button className="settingbar-menu-btn">네트워크</button>
        </li>
        <li>
          <Link to="/SettingAccount" className="settingbar-menu-btn">계정 관리</Link>
        </li>
        <li>
          <button className="settingbar-menu-btn">작물 추가</button>
        </li>
        <li>
          <button className="settingbar-menu-btn">시간</button>
        </li>
      </ul>
    </div>
  );
};

export default Settingbar;