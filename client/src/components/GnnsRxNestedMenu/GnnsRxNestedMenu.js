import React, { useState } from "react";
import "./GnnsRxNestedMenu.css";
import { MENUS } from "./GnnsRxItem";

function SubMenu({ label, onClick }) {
  const [activeSubMenu, setActiveSubMenu] = useState(false);

  const handleMouseEnter = () => {
    setActiveSubMenu(true);
  };

  const handleMouseLeave = () => {
    setActiveSubMenu(false);
  };

  return (
    <div
      className="menu-options"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div className="main-menu">{label}</div>
    </div>
  );
}

function GnnsRxNestedMenu() {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleHover = () => {
    setActiveMenu(!activeMenu);
  };

  const handleLinkClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <div className="menu-container" onMouseLeave={() => setActiveMenu(false)}>
        <div
          className="open-menu-box"
          onMouseEnter={handleHover}
          onClick={() => setActiveMenu(true)}
        >
          <span className="btn-text">GNNS RX</span>
        </div>
        {activeMenu && (
          <div className="main-menu-container">
            {MENUS.map((menu, index) => (
              <SubMenu
                key={index}
                label={menu.label}
                onClick={() => handleLinkClick(menu.onClickUrl)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default GnnsRxNestedMenu;
