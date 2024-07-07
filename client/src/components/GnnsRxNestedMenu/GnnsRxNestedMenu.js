import { useState } from "react";
import "./GnnsRxNestedMenu.css";
import { MENUS } from "./GnnsRxItem";

function SubMenu({ label, subMenus, onClick }) {
  const [activeSubMenu, setActiveSubMenu] = useState(false);

  const handleMouseEnter = () => {
    if (subMenus.length > 0) {
      setActiveSubMenu(true);
    }
  };

  const handleMouseLeave = () => {
    setActiveSubMenu(false);
  };

  return (
    <div
      className="menu-options"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="main-menu">{label}</div>
      {activeSubMenu && (
        <div className="sub-menu">
          {subMenus.map((subMenu, index) => (
            <div
              key={index}
              className="sub-menu-options"
              onClick={subMenu.onClick}
            >
              {subMenu.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function GnnsRxNestedMenu() {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleHover = () => {
    setActiveMenu(!activeMenu);
  };

  const handleLinkClick = () => {
    window.location.href = "http://127.0.0.1/script/api/1.php";
  };

  return (
    <div>
      <div className="menu-container" onMouseLeave={handleHover}>
        <div
          className="open-menu-box"
          onMouseEnter={handleHover}
          onClick={handleLinkClick}>
          GNNS RX
        </div>
        {activeMenu && (
          <div className="main-menu-container" onMouseLeave={() => setActiveMenu(false)}>
            {MENUS.map((menu, index) => (
              <SubMenu
                key={index}
                label={menu.label}
                subMenus={menu.subMenus}
                onClick={menu.onClick}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default GnnsRxNestedMenu;
