import React, { useState, useEffect } from "react";

const NewSongForm = (props) => {
  //
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addSong(title);
    console.log(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Song Name:</label>
      <input
        type="text"
        required
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <input type="submit" value="addSong"></input>
    </form>
  );
};

export default NewSongForm;
