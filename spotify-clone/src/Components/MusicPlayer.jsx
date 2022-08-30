import React, { useEffect, useRef, useState } from "react";
import {
  FaBackward,
  FaForward,
  FaHeart,
  FaPause,
  FaPlay,
  FaRegHeart,
  FaShareAlt,
  FaStepBackward,
  FaStepForward,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import "../Styles/MusicPlayer.css";

function MusicPlayer({ song, imgSrc }) {
  const [isLove, setIsLove] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef(); // Our Audio tag
  const progressBar = useRef(); // Our Progress bar
  const animation = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const changePlayPause = () => {
    // setIsPlaying(!isPlaying);
    const prevValue = isPlaying;
    if (!prevValue) {
      audioPlayer.current.play();
      animation.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animation.current);
    }

    setIsPlaying(!prevValue);
  };

  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const retMin = minutes < 10 ? `0${minutes}` : `${minutes}`;

    const seconds = Math.floor(sec % 60);
    const retSec = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${retMin}:${retSec}`;
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrentTime();
    animation.current = requestAnimationFrame(whilePlaying)
  };

  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changeCurrentTime();
  };

  const changeCurrentTime = () => {
    progressBar.current.style.setProperty("--player-played", `${(progressBar.current.value / duration) * 100}%`);

    setCurrentTime(progressBar.current.value);
  };

  const changeLoved = () => {
    setIsLove(!isLove);
  };

  console.log(song, imgSrc);
  return (
    <div className="musicPlayer">
      <div className="songImg">
        <img src={imgSrc} alt="" />
      </div>
      <div className="songAttributes">
        <audio src={song} preload="metadata" ref={audioPlayer} />
        <div className="top">
          <div className="left">
            <div className="loved" onClick={changeLoved}>
              {isLove ? (
                <i>
                  <FaHeart />
                </i>
              ) : (
                <i>
                  <FaRegHeart />
                </i>
              )}
            </div>

            <div className="download">
              <i>
                <BsDownload />
              </i>
            </div>
          </div>
          <div className="middle">
            <div className="back">
              <i>
                <FaStepBackward />
              </i>
              <i>
                <FaBackward />
              </i>
            </div>
            <div className="playPause" onClick={changePlayPause}>
              {isPlaying ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>
            <div className="forward">
              <i>
                <FaForward />
              </i>
              <i>
                <FaStepForward />
              </i>
            </div>
          </div>
          <div className="right">
            <i>
              <FaShareAlt />
            </i>
          </div>
        </div>
        <div className="bottom">
          <div className="currentTime">{calculateTime(currentTime)}</div>
          <input type="range" className="progressBar" ref={progressBar} onChange={changeProgress} />
          <div className="duration">
            {duration && !isNaN(duration) && calculateTime(duration) ? calculateTime(duration) : "00:00"}
          </div>
        </div>
      </div>
    </div>
  );
}

export { MusicPlayer };
