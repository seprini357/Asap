import React from "react";
import './Setting.css';
import profileIcon from "../icons/lucide/profileIcon.svg";
import Settingbar from "../component/Settingbar";
import syncIcon from "../icons/lucide/sync.svg";
import userIcon from "../icons/lucide/user.svg";
import globeIcon from "../icons/lucide/globe.svg";
import hardDriveIcon from "../icons/lucide/hardDrive.svg";
import timerIcon from "../icons/lucide/timer.svg";


const menuItems = [
  { icon: syncIcon, label: "동기화" },
  { icon: userIcon, label: "개인 정보" },
  { icon: globeIcon, label: "네트워크" },
  { icon: hardDriveIcon, label: "계정 관리" },
  { icon: timerIcon, label: "시간" },
];


const Setting = () => {
  return (
    <div className="settingbar-row">
      <Settingbar />
      <div className="container">
        <div className="profileBox">
          <img src={profileIcon} alt="프로필" className="profileIcon" />
          <div className="profileInfo">
            <div className="email">님</div>
            <div className="mode">모드입니다</div>
          </div>
        </div>
        <div className="settingMenuCard">
          {menuItems.map((item) => (
            <button className="settingMenuRow" key={item.label}>
              <img src={item.icon} alt="" className="settingMenuIcon" />
              <span className="settingMenuLabel">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Setting;