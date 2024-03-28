import { useState } from "react";
import "./App.css";

const COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Belarus",
  "Belgium",
  "Belize",
  "Botswana",
  "Brazil",
  "China",
];

const DATA = {
  videoTitle: "Tesla M3",
  videoLink: "https://www.youtube.com/watch?v=LtOqU2o81iI",
  videoThumbNail:
    "https://i.ytimg.com/vi/LtOqU2o81iI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9sy0ANFxQetkKmAqbSsEb5GLuRg",
  userAvatar:
    "https://yt3.ggpht.com/p89RToB7j2iu9BYhK2Zn6vLkxJXYC9cAbxfJ0eMvUd4jrsyRQtuYIvinn8N2H6utyeBKcrvlhSE=s176-c-k-c0x00ffffff-no-rj-mo",
  author: "Tesla",
  publishTime: "2022-09-28T14:00:00",
  numberOfViews: 123,
};

function VideoCard({ video }) {
  let publishTime = new Date(video.publishTime).toLocaleDateString();

  return (
    <div className="video-card">
      <img
        src={video.videoThumbNail}
        alt={video.videoTitle}
        className="video-thumbnail"
      />
      <div className="video-info">
        <div className="video-author-picture">
          <img src={video.userAvatar} alt={video.author} />
        </div>
        <div className="video-details">
          <h3 className="video-title">{video.videoTitle}</h3>
          <p className="video-author-name">{video.author}</p>
          <span className="video-data">
            {video.numberOfViews} views • {publishTime}
          </span>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  function handleChange(event) {
    const userInput = event.target.value;
    const filteredSuggestions = COUNTRIES.filter((suggestion) =>
      suggestion.toLowerCase().startsWith(userInput.toLowerCase())
    );

    setInputValue(userInput);
    setFilteredSuggestions(filteredSuggestions);
    setShowSuggestions(true);
  }

  return (
    <div className="app">
      <h2>Autocomplete</h2>
      <div className="search-bar">
        <input type="text" value={inputValue} onChange={handleChange} />
        {showSuggestions && inputValue && (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        )}
      </div>
      <hr></hr>
      <h2>Video</h2>
      <VideoCard video={DATA} />
    </div>
  );
}

export default App;
