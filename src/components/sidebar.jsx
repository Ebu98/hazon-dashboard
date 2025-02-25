import React, { useContext } from "react";
import {
  BsGrid1X2Fill,
  BsFillGrid3X3GapFill,
  BsListCheck,
  BsFillGearFill,
} from "react-icons/bs";
import { FaAccessibleIcon } from "react-icons/fa";
import { GlobalContext } from "../context/datacontext";

function Sidebar() {
  const { OpenSidebar, openSidebarToggle } = useContext(GlobalContext);
  return (
    <div id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <FaAccessibleIcon className="icon_header" /> HAZON TECH
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="">
            <BsFillGrid3X3GapFill className="icon" /> Investment
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="">
            <BsListCheck className="icon" /> Transaction
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="">
            <BsFillGearFill className="icon" /> Setting
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
