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
  publishTime: "2024-03-20T14:00:00",
  numberOfViews: 123,
};

function VideoCard({ video, isData }) {
  const currentDate = new Date();
  const publishDate = new Date(video.publishTime);
  const diff = currentDate.getTime() - publishDate.getTime();
  const daysAgo = Math.floor(diff / (1000 * 60 * 60 * 24));

  return (
    <div className="video-card">
      <div className="video-thumbnail">
        {isData ? (
          <a href={video.videoLink} target="_blank">
            <img
              src={video.videoThumbNail}
              alt={video.videoTitle}
              className="video-thumbnail-img"
            />
          </a>
        ) : (
          <div className="video-thumbnail-img skeleton"></div>
        )}
      </div>
      <div className="video-info">
        {isData ? (
          <a href={video.videoLink} target="_blank">
            <img
              src={video.userAvatar}
              alt={video.author}
              className="video-author-img"
            />
          </a>
        ) : (
          <div className="video-author-img skeleton"></div>
        )}
        <div className="video-details">
          {isData ? (
            <div>
              <a className="video-title" href={video.videoLink} target="_blank">
                {video.videoTitle}
              </a>
              <p className="video-author-name">{video.author}</p>
              <span className="video-data">
                {video.numberOfViews} views • {daysAgo} days ago
              </span>
            </div>
          ) : (
            <div>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isDataAvailable, setIsDataAvailable] = useState(false);

  function handleChange(event) {
    const userInput = event.target.value;
    const filteredSuggestions = COUNTRIES.filter((suggestion) =>
      suggestion.toLowerCase().startsWith(userInput.toLowerCase())
    );

    setInputValue(userInput);
    setFilteredSuggestions(filteredSuggestions);
    setShowSuggestions(true);
  }

  function delayData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        setIsDataAvailable(true);
        resolve(DATA);
      }, 2000);
    });
  }

  delayData();

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
      <h2>Video Card</h2>
      <VideoCard video={DATA} isData={isDataAvailable} />
    </div>
  );
}

export default App;
