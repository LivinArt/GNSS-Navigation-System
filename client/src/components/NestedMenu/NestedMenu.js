import { useState } from "react";
import "./NestedMenu.css";
import DocImg from "./doc.png";
import { MENUS } from "./MenuItems";

function SubMenu({ label, subMenus, onClick }) {
  const [activeSubMenu, setActiveSubMenu] = useState(false);

  const handleClick = () => {
    if (subMenus.length === 0) {
      onClick();
    } else {
      setActiveSubMenu(!activeSubMenu);
    }
  };

  return (
    <div className="menu-options">
      <div className="main-menu" onClick={handleClick}>
        {label}
      </div>
      {activeSubMenu && (
        <div className="sub-menu" onMouseLeave={() => setActiveSubMenu(false)}>
          {subMenus.map((subMenu, index) => {
            const { label, onClick } = subMenu;

            return (
              <div key={index} className="sub-menu-options" onClick={onClick}>
                {label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function NestedMenu() {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <div>
      <div className="menu-container">
        <div className="open-menu-box" onClick={() => setActiveMenu(!activeMenu)}>
          <img src={DocImg} className="menu-icon" alt="Menu Icon" />
          Doc
          <span className="down-arrow-symbol">▼</span>
        </div>
        {activeMenu && (
          <div className="main-menu-container" onMouseLeave={() => setActiveMenu(false)}>
            {MENUS.map((menu, index) => {
              const { label, onClick, subMenus } = menu;

              return (
                <SubMenu
                  subMenus={subMenus}
                  onClick={onClick}
                  label={label}
                  key={index}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default NestedMenu;
