import React from "react";
import NavBar from "./Components/NavBar";
import TodoList from "./Components/TodoList";
import ListContextProvider from "./Context/ListContext";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ListContextProvider>
        <TodoList />
      </ListContextProvider>
    </div>
  );
}

export default App;
