import React from "react";
import chatbotButton from "../icons/lucide/chatbotButton.svg"
import './Navbar.css';
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handleChatbotClick = () => {
    navigate('/Chatbot');
  };
  return (
  <div className="topNavbar">
    <div className="logo">smartfarm <span className="logo-sub">ASAP</span></div>
    <div className="right-icons">
      <img className="chatbotButton" alt="chatbotButton" src={chatbotButton} onClick={handleChatbotClick}></img>
    </div>
  </div>

  );
};

export default Navbar;