import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

const BookList = () => {
  const { isLight, Light, Dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLight ? Light : Dark;
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.ui }}
    >
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id} style={{ background: theme.bg }}>
              {book.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
