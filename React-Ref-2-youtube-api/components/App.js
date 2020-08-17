import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./videoDetail";
class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onSearch = async (term) => {
    const KEY = "<your youtube api access key>";
    var response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: KEY,
      },
    });
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    console.log("from Appppp", video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="container ui">
        <SearchBar onFormSubmit={this.onSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
