import React from 'react'
import { NavLink } from "react-router";
import logo from '../assets/logo.png'; // כאן תכניסי את שם הקובץ שלך

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: "עמוד הבית", path: "/" },
  { label: "בחורים", path: "/boys" },
  { label: "בחורות", path: "/girls" },
];

const Header = () => {
  return (
    <nav style={sidebarStyle}>
      {/* לוגו */}
      <div style={logoContainerStyle}>
        <img src={logo} alt="לוגו" style={logoStyle} />
      </div>

      {/* רשימת ניווט */}
      <ul style={ulStyle}>
        {navItems.map((item) => (
          <li key={item.path} style={liStyle}>
            <NavLink
              to={item.path}
              style={linkStyle}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// סטיילים
const sidebarStyle: React.CSSProperties = {
  position: "fixed",
  right: 0,
  top: 0,
  height: "100vh",
  width: "250px",
  backgroundColor: "#ffffff",
  padding: "20px",
  boxSizing: "border-box",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const logoContainerStyle: React.CSSProperties = {
  marginBottom: "30px",
};

const logoStyle: React.CSSProperties = {
  width: "150px", // אפשר לשנות את הגודל כרצונך
  height: "auto",
};

const ulStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  width: "100%",
};

const liStyle: React.CSSProperties = {
  marginBottom: "15px",
 
};

const linkStyle: React.CSSProperties = {
  color: "black",
  textDecoration: "none",
  fontWeight: 100,
  display: "block",
  textAlign: "center",
   fontFamily: 'Baloo 2, cursive',
   fontSize: '18px',
};

export default Header
