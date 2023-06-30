import React, { useEffect } from "react";
import { songs } from "../App";

function PlayList({ currentSong, setCurrentSong, setProgress, setIsPlaying }) {
  const handleClick = (event) => {
    setIsPlaying(false);
    setProgress(0);
    const songClick = event.target.closest(".song");
    const songName = songClick.children[1].children[0].innerHTML;
    setCurrentSong(songs.find((song) => song.name === songName));
    songClick.classList.add("active");
  };
  useEffect(() => {
    const listSong = document.querySelectorAll(".song");
    listSong?.forEach((song, index) => {
      song.classList.remove("active");
      if (index === currentSong.id) {
        song.classList.add("active");
      }
    });
    const songActive = document.querySelector(".song.active");
    songActive.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [currentSong]);

  return (
    <div className="playlist">
      {songs.map((song, index) => {
        return (
          <div
            key={index}
            className="song"
            onClick={(event) => handleClick(event)}
          >
            <div
              className="thumb"
              style={{ backgroundImage: `url(${song.image})` }}
            ></div>
            <div className="body">
              <h3 className="title">{song.name}</h3>
              <p className="author">{song.author}</p>
            </div>
            <div className="option">
              <i className="fas fa-ellipsis-h"></i>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PlayList;
