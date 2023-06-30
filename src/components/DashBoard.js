import React, { useEffect, useState } from "react";
import { songs } from "../App";

function DashBoard({
  currentSong,
  setCurrentSong,
  progress,
  setProgress,
  isPlaying,
  setIsPlaying,
}) {
  const [repeat, setRepeat] = useState(false);
  const [random, setRandom] = useState(false);
  const handlePrevBtn = () => {
    if (currentSong.id > 0) {
      setCurrentSong(songs[currentSong.id - 1]);
      setProgress(0);
      if (isPlaying) {
        setIsPlaying(true);
      }
    }
  };
  const handleNextBtn = () => {
    if (random) {
      setCurrentSong(songs[Math.floor(Math.random() * songs.length)]);
      setProgress(0);
      if (isPlaying) {
        setIsPlaying(true);
      }
    } else {
      if (currentSong.id < songs.length - 1) {
        setCurrentSong(songs[currentSong.id + 1]);
        setProgress(0);
        if (isPlaying) {
          setIsPlaying(true);
        }
      }
    }
  };
  const handlePlayBtn = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  const handleRepeat = (event) => {
    if (!repeat) {
      setRepeat(true);
      event.target.closest(".btn-repeat").classList.add("active");
    } else {
      setRepeat(false);
      event.target.closest(".btn-repeat").classList.remove("active");
    }
  };

  const handleEndSong = () => {
    if (repeat) {
      const audio = document.querySelector("#audio");
      audio.play();
    } else {
      handleNextBtn();
    }
  };

  const handleRandomSong = (event) => {
    if (!random) {
      setRandom(true);
      event.target.closest(".btn-random").classList.add("active");
    } else {
      setRandom(false);
      event.target.closest(".btn-random").classList.remove("active");
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong]);

  useEffect(() => {
    const audio = document.querySelector("#audio");
    if (isPlaying) {
      audio.play();
      audio.ontimeupdate = function () {
        setProgress((audio.currentTime / audio.duration) * 100);
      };
    } else {
      audio.pause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, currentSong]);

  const handleProgressInput = (e) => {
    const audio = document.querySelector("#audio");
    audio.currentTime = (e.target.value / 100) * audio.duration;
  };

  return (
    <div className="dashboard">
      <header>
        <h4>Now playing:</h4>
        <h2>{currentSong.name}</h2>
      </header>

      <div className="cd">
        <div
          className="cd-thumb"
          style={{
            backgroundImage: `url(${currentSong.image})`,
            transform: `rotate(${progress * 50}deg)`,
            transition: `300ms linear all`,
            transformOrigin: "50% 50%",
          }}
        ></div>
      </div>

      <div className="control">
        <button
          className="btn btn-repeat"
          onClick={(event) => handleRepeat(event)}
        >
          <i className="fas fa-redo"></i>
        </button>
        <button className="btn btn-prev" onClick={() => handlePrevBtn()}>
          <i className="fas fa-step-backward"></i>
        </button>
        <button className="btn btn-toggle-play" onClick={() => handlePlayBtn()}>
          {isPlaying ? (
            <i className="fas fa-pause icon-pause"></i>
          ) : (
            <i className="fas fa-play icon-play"></i>
          )}
        </button>
        <button className="btn btn-next" onClick={() => handleNextBtn()}>
          <i className="fas fa-step-forward"></i>
        </button>

        <button
          className="btn btn-random"
          onClick={(event) => handleRandomSong(event)}
        >
          <i className="fas fa-random"></i>
        </button>
      </div>

      <input
        id="progress"
        className="progress"
        type="range"
        value={progress || 0}
        onChange={(event) => handleProgressInput(event)}
        step="1"
        min="0"
        max="100"
      />
      <audio id="audio" src={currentSong.path} onEnded={handleEndSong} />
    </div>
  );
}

export default DashBoard;
