import React, { useContext, useState } from "react";

import { ListGroup, ListGroupItem } from "react-bootstrap";
import { ListContext } from "../Context/ListContext";

const TodoList = () => {
  const listRaw = useContext(ListContext);
  const list = listRaw.list;
  const addItem = listRaw.addItem;
  const [item, alterItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(item);
  };
  // window.localStorage.setItem("name", "Keshav");
  return (
    <ListGroup variant="flush">
      {list.map((item) => {
        return <ListGroup.Item>{item.title}</ListGroup.Item>;
      })}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={item}
          onChange={(e) => {
            alterItem(e.target.value);
            console.log(e.target.value);
          }}
        />
        <input type="submit" value="Submit" />
      </form>
    </ListGroup>
  );
};

export default TodoList;
