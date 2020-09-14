import React, { createContext, useState } from "react";

export const ListContext = createContext();

const ListContextProvider = (props) => {
  const [list, setList] = useState([
    { title: "Titlke1", id: 1 },
    { title: "Titlke2", id: 2 },
    { title: "Titlke3", id: 3 },
    { title: "Titlke4", id: 4 },
  ]);

  const addItem = (title) => {
    setList([...list, { title }]);
  };

  return (
    <ListContext.Provider value={{ list, addItem }}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;
