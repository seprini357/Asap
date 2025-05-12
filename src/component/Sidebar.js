import React from "react";
import { Link } from "react-router-dom";
import './Sidebar.css'
import logoutButton from "../icons/lucide/logoutButton.svg"
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/DashBoard">실시간 대시보드</Link>
        </li>        
        <li><Link to="/DataStatistics">데이터 통계</Link>
        </li>        
        <li><Link to="/Setting">설정</Link></li>
      </ul>
      <div className="logoutbutton">
        <img alt="logoutButton" src={logoutButton} />
      </div>
    </div>
  );
};

export default Sidebar;
