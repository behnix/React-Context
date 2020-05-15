import React, { useState, createContext } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBook] = useState([
    { title: "C# for beginner", id: 1 },
    { title: "React & Redux self study", id: 2 },
    { title: "Javascript from scratch", id: 3 },
    { title: "Network+", id: 4 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;