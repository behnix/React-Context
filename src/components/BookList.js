import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLight, Light, Dark } = this.context;
    const theme = isLight ? Light : Dark;
    return (
      <div
        className="book-list"
        style={{ color: theme.syntax, background: theme.ui }}
      >
        <ul>
          <li style={{ background: theme.bg }}>C# for beginner</li>
          <li style={{ background: theme.bg }}>React & Redux self study</li>
          <li style={{ background: theme.bg }}>Javascript from scratch</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
