import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => (
          <ThemeContext.Consumer>
            {(themeContext) => {
              const { isAuthenticated, toggleAuth} = authContext;
              const { isLight, Light, Dark } = themeContext;
              const theme = isLight ? Light : Dark;
              const auth = isAuthenticated ? 'Logged in' : 'Logged out';
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
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
