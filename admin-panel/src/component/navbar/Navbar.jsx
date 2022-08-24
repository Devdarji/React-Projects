import React from 'react'
import './navbar.css'
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Language from "@mui/icons-material/Language";
import Settings from "@mui/icons-material/Settings";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navLeft">
          <span className="logo">DevAdminPanel</span>
        </div>
        <div className="navRight">
          <div className="navbarIconContainer">
            <NotificationsNoneIcon />
            <span className="navIconBag">2</span>
          </div>
          <div className="navbarIconContainer">
            <Language />
            <span className="navIconBag">2</span>
          </div>
          <div className="navbarIconContainer">
            <Settings />
            <span className="navIconBag">2</span>
          </div>
          <img
            src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="navAvatar"
          />
        </div>
      </div>
    </div>
  );
}
