import React from "react";
import chatbotButton from "../icons/lucide/chatbotButton.svg"
import './Navbar.css';
const Navbar = () => {
  return (
  <div className="topNavbar">
    <div className="logo">smartfarm ASAP</div>
    <div className="right-icons">
      <img className="chatbotButton" alt="chatbotButton" src={chatbotButton}></img>
    </div>
  </div>

  );
};

export default Navbar;