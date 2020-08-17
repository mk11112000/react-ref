import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;
  const videoSrc = video.id.videoId;
  return (
    <div>
      <div className="ui segment">
        <div className="ui embed">
          <iframe
            width="560"
            height="315"
            src={"https://www.youtube.com/embed/" + videoSrc}
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
