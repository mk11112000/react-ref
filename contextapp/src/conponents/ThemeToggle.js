import React, { Component, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

// class ThemeToggle extends Component {
//   state = {};
//   static contextType = ThemeContext;
//   render() {
//     const { toggleTheme } = this.context;
//     return <button onClick={toggleTheme}>Toggle</button>;
//   }
// }

// export default ThemeToggle;
const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>Toggle</button>;
};

export default ThemeToggle;
