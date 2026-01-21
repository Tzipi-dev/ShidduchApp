import React from 'react'
import { NavLink } from "react-router";
import logo from '../assets/logo.png';
import circleImage from '../assets/circle-image.png'; // התמונה של העיגול

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
    <>
      {/* העיגול הקבוע */}
      {/* <div style={fixedCircleStyle}>
        <img src={circleImage} alt="מד" style={circleImgStyle} />
      </div> */}

      {/* הניווט */}
      <nav style={sidebarStyle}>
        <div style={logoContainerStyle}>
          <img src={logo} alt="לוגו" style={logoStyle} />
        </div>

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
    </>
  );
}

// סטיילים הקיימים
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

const logoContainerStyle: React.CSSProperties = { marginBottom: "30px" };
const logoStyle: React.CSSProperties = { width: "150px", height: "auto" };
const ulStyle: React.CSSProperties = { listStyle: "none", padding: 0, margin: 0, width: "100%" };
const liStyle: React.CSSProperties = { marginBottom: "15px" };
const linkStyle: React.CSSProperties = {
  color: "black",
  textDecoration: "none",
  fontWeight: 100,
  display: "block",
  textAlign: "center",
  fontFamily: 'Baloo 2, cursive',
  fontSize: '18px',
};

// סטיילים לעיגול הקבוע
const fixedCircleStyle: React.CSSProperties = {
  position: "fixed",
  top: "10px",
  left: "10px",
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  overflow: "hidden",
  zIndex: 1000, // תמיד מעל תוכן
  border: "2px solid #000", // אופציונלי, מסגרת סביב העיגול
};

const circleImgStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

export default Header;
