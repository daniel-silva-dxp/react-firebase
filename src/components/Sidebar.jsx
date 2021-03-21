import React from "react";
import { NavLink } from "react-router-dom";
import {
  TiHomeOutline,
  TiUserOutline,
  TiArrowBackOutline,
} from "react-icons/ti";

import "../styles/components/Sidebar.scss";

const Sidebar = () => {
  return (
    <aside>
      <div className="logo">git.app</div>
      <nav>
        <ul>
          <li className="link">
            <NavLink to="/" end>
              <TiHomeOutline /> <span>Home</span>
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="/profile">
              <TiUserOutline /> <span> Profile</span>
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="/login">
              <TiArrowBackOutline /> <span>Logout</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
