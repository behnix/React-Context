import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { isLight, Light, Dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLight ? Light : Dark;
  const auth = isAuthenticated ? "Logged in" : "Logged out";
  return (
    <nav style={{ background: theme.bg, color: theme.syntax }}>
      <h4>Context App</h4>
      <div onClick={toggleAuth}>{auth}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
