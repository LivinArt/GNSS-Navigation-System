import { useState } from "react";
import "./NestedMenu.css";
import DocImg from "./doc.png";
import { MENUS } from "./MenuItems";

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
      onMouseLeave={handleMouseLeave}>
      <div className="main-menu">
        {label}
      </div>
      {activeSubMenu && (
        <div className="sub-menu">
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
      <div className="menu-container-doc">
        <div className="open-menu-box" onClick={() => setActiveMenu(!activeMenu)}>
          <img src={DocImg} className="menu-icon" alt="Menu Icon" />
          <span className='btn-text'>Doc</span>
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
                  key={index}/>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default NestedMenu;
