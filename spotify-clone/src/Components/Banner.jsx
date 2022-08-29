import React from 'react'
import Artist from "../img/artist.jpg";
import verified from "../img/verified1.png";
import {FaEllipsisH, FaHeadphones, FaCheck} from 'react-icons/fa'


function Banner() {
  return (
    <div className="banner">
      <img className="bannerImg" src={Artist} alt="Not Found" />

      <div className="content">
        <div className="breadCrump">
          <p>
            Home <span>/Popular Artist</span>
          </p>
          <i>
            <FaEllipsisH />
          </i>
        </div>
        <div className="artist">
          <div className="left">
            <div className="name">
              <h2>A-Ha</h2>

              <img src={verified} alt="Not FOund" />
            </div>
            <p>
              <i>
                <FaHeadphones />
              </i>{" "}
              11,987,1231 <span>Monthly Listeners</span>
            </p>
          </div>
          <div className="right">
            <a href={() => false}>Play</a>
            <a
              href="
                #"
            >
              <i>
                <FaCheck />
              </i>
              Following
            </a>
          </div>
        </div>
      </div>

      <div className="bottomLayer"></div>
    </div>
  );
}

export {Banner}