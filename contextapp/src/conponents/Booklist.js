import React, { Component, useContext } from "react";
import { BookContext } from "../context/BookContext";
import { ThemeContext } from "../context/ThemeContext";
import uuid from "uuid/v1";
// class BookList extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isLightTheme, light, dark } = this.context;
// const theme = isLightTheme ? light : dark;

// return (
//   <div
//     className="book-list"
//     style={{ background: theme.ui, color: theme.syntax }}
//   >
//     <ul>
//       <li style={{ background: theme.bg }}>the way of kings</li>
//       <li style={{ background: theme.bg }}>the name of the wind</li>
//       <li style={{ background: theme.bg }}>the final empire</li>
//     </ul>
//   </div>
//     );
//   }
// }

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const books = useContext(BookContext).books;

  console.log(books);

  const booksL = books.map((book) => {
    return (
      <li style={{ background: theme.bg }} key={uuid()}>
        {book.title}
      </li>
    );
  });

  console.log(booksL);

  return (
    <div
      className="book-list"
      style={{ background: theme.ui, color: theme.syntax }}
    >
      <ul>
        {booksL}
        <li style={{ background: theme.bg }}>the way of kings</li>
        <li style={{ background: theme.bg }}>the name of the wind</li>
        <li style={{ background: theme.bg }}>the final empire</li>
      </ul>
    </div>
  );
};

export default BookList;
