import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const BookList = () => {
  const {isLight, Light, Dark} = useContext(ThemeContext)
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
 
export default BookList;
