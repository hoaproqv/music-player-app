import React, { useState } from "react";
import "./App.css";
import DashBoard from "./components/DashBoard";
import PlayList from "./components/PlayList";

export const songs = [
  {
    id: 0,
    name: "Searching Robot",
    author: "Vexento",
    image: "/assets/image/song1.png",
    path: "/assets/music/song1.mp3",
  },
  {
    id: 1,
    name: "Phase 2",
    author: "Vexento",
    image: "/assets/image/song2.png",
    path: "/assets/music/song2.mp3",
  },
  {
    id: 2,
    name: "Saga",
    author: "Vexento",
    image: "/assets/image/song3.png",
    path: "/assets/music/song3.mp3",
  },
  {
    id: 3,
    name: "Wild",
    author: "Vexento",
    image: "/assets/image/song4.png",
    path: "/assets/music/song4.mp3",
  },
  {
    id: 4,
    name: "Happiness",
    author: "Vexento",
    image: "/assets/image/song5.png",
    path: "/assets/music/song5.mp3",
  },
  {
    id: 5,
    name: "Jump",
    author: "Vexento",
    image: "/assets/image/song6.png",
    path: "/assets/music/song6.mp3",
  },
  {
    id: 6,
    name: "Masked Raven",
    author: "Vexento",
    image: "/assets/image/song7.png",
    path: "/assets/music/song7.mp3",
  },
  {
    id: 7,
    name: "Trippy Love",
    author: "Vexento",
    image: "/assets/image/song8.png",
    path: "/assets/music/song8.mp3",
  },
  {
    id: 8,
    name: "Verve",
    author: "Vexento",
    image: "/assets/image/song9.png",
    path: "/assets/music/song9.mp3",
  },
  {
    id: 9,
    name: "Northern Lights",
    author: "Vexento",
    image: "/assets/image/song10.png",
    path: "/assets/music/song10.mp3",
  },
];

function App() {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <div className="player">
        <DashBoard
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          progress={progress}
          setProgress={setProgress}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
        <PlayList
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          setProgress={setProgress}
          setIsPlaying={setIsPlaying}
        />
      </div>
    </>
  );
}

export default App;
