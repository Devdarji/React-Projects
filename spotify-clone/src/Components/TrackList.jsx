import React from "react";
import { BsVolumeUpFill, BsMusicNoteList } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import Track from '../img/track.png';

function TrackList() {
  return (
    <div className="trackList">
      <div className="top">
        <img src={Track} alt="Track Png" />
        <p className="trackName">
          Sample Name <span className="trackSpan">Artist</span>
        </p>
      </div>
      <div className="bottom">
        <i>
          <BsVolumeUpFill />
        </i>
        <input type="range" name="" id="" />
        <i>
          <BsMusicNoteList />
        </i>
        <i>
          <FaDesktop />
        </i>
      </div>
    </div>
  );
}

export { TrackList };
