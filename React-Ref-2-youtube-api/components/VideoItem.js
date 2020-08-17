import React from "react";
import "./videoItem.css";
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="video-item item " onClick={() => onVideoSelect(video)}>
      <img className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <h4 className="header image-title">{video.snippet.title}</h4>
        <br />
        <p className="description">{video.snippet.description}</p>
      </div>
    </div>
  );
};
export default VideoItem;
