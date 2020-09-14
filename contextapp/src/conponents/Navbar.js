import React, { Component, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

// class Navbar extends Component {
//   static contextType = ThemeContext;

//   render() {
//     return (
//       <AuthContext.Consumer>
//         {(authContext) => {
//           return (
//             <ThemeContext.Consumer>
//               {(context) => {
//                 const { isLightTheme, light, dark } = context;
//                 const theme = isLightTheme ? light : dark;
//                 const { isAuthenticated, toggleAuth } = authContext;
//                 return (
// <nav style={{ background: theme.ui, color: theme.syntax }}>
//   <h1>Context App</h1>
//   <h3 onClick={toggleAuth}>
//     {isAuthenticated ? "Log In" : "Log Out"}
//   </h3>
//   <ul>
//     <li>Home</li>
//     <li>About</li>
//     <li>Contact</li>
//   </ul>
// </nav>
//                 );
//               }}
//             </ThemeContext.Consumer>
//           );
//         }}
//       </AuthContext.Consumer>
//     );
//   }
// }

// export default Navbar;

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <h3 onClick={toggleAuth}>{isAuthenticated ? "Log In" : "Log Out"}</h3>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
