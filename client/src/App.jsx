import { useState, useEffect } from "react";
import "./App.css";
import router from "./router/router";
import { RouterProvider } from "react-router";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import React from "react";

function App() {
  const [user, setUser] = useState(null);
const clientId = import.meta.env.VITE_CLIENT_ID;
  // בדיקה של localStorage בהתחלה
  useEffect(() => {
    const storedUser = localStorage.getItem("currentMatchmaker");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (response) => {
    if (response.credential) {
      // מפענחים JWT
      const base64Url = response.credential.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
      const profile = JSON.parse(jsonPayload);

      const loggedUser = {
        name: profile.name,
        email: profile.email,
        picture: profile.picture, // כאן נכנס ה-URL של תמונת הפרופיל
      };

      localStorage.setItem("currentMatchmaker", JSON.stringify(loggedUser));
      setUser(loggedUser);
      console.log(profile);
    }
  };

  // אם אין משתמש - הצג רק Google Login במרכז המסך
  if (!user) {
    return (
      <GoogleOAuthProvider clientId={clientId}>
        <div style={centeredLoginStyle}>
          <GoogleLogin onSuccess={handleLogin} onError={() => console.log("Login Failed")} />
        </div>
      </GoogleOAuthProvider>
    );
  }

  // אם המשתמש מחובר - הצג את העיגול בצד + שאר האתר
  return (
    <GoogleOAuthProvider clientId={clientId}>
      {/* עיגול קבוע למעלה שמאל */}
      {user?.picture && (
        <div style={fixedCircleStyle}>
          <img src={user.picture} alt="פרופיל" style={circleImgStyle} />
        </div>
      )}

      {/* שאר האתר */}
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  );
}

// עיצוב העיגול הקבוע בצד
const fixedCircleStyle = {
  position: "fixed",
  top: "10px",
  left: "10px",
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  overflow: "hidden",
  zIndex: 1000,
  border: "2px solid #000",
};

// תמונה בתוך העיגול
const circleImgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

// עיצוב הכפתור במרכז המסך אם אין משתמש
const centeredLoginStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
};

export default App;
