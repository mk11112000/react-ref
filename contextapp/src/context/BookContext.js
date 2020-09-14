import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Titlke1", id: 1 },
    { title: "Titlke2", id: 2 },
    { title: "Titlke3", id: 3 },
    { title: "Titlke4", id: 4 },
  ]);

  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
