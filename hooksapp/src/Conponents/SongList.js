import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";
import NewSongForm from "./NewSongForm";
const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "song1", id: 1 },
    { title: "song2", id: 2 },
    { title: "song3", id: 3 },
  ]);

  const addSong = (title) => {
    setSongs([...songs, { title, id: uuid() }]);
  };
  const [age, setAge] = useState(20);

  useEffect(() => {
    console.log("useEffectHook");
  }, [songs]);

  useEffect(() => {
    console.log("qwertyuiop[");
  }, [age]);

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      {age}
      <button onClick={() => setAge(age + 1)}>add 1</button>
    </div>
  );
};

export default SongList;
