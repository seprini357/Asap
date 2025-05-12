import React from "react";
import bell from "../icons/lucide/bell.svg";
import chatbotButton from "../icons/lucide/chatbotButton.svg"
import './Navbar.css';
const Navbar = () => {
  return (
  <div className="topNavbar">
    <div className="logo">smartfarm ASAP</div>
    <div className="right-icons">
      <img className="chatbotButton" alt="chatbotButton" src={chatbotButton}></img>
      <img className="bell" alt="bell" src={bell}></img>
    </div>
  </div>

  );
};

export default Navbar;