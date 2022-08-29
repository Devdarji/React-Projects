import React, { useEffect } from "react";
import { FaUsers } from "react-icons/fa";
import '../Styles/MainContainer.css'
import { Banner } from "./Banner";
import { AudioList } from "./AudioList";

function MainContainer() {

    useEffect(() => {
      const allLi = document.querySelector(".menuList ul").querySelectorAll("li");

      function changeMenuActive() {
        allLi.forEach((n) => n.classList.remove("active"));
        this.classList.add("active");
      }

      allLi.forEach((n) => n.addEventListener("click", changeMenuActive));
    }, []);

  return (
    <div className="mainContainer">
      <Banner />

      <div className="menuList">
        <ul>
          <li>
            <a href={() => false}>Popular</a>
          </li>
          <li>
            <a href={() => false}>Albums</a>
          </li>
          <li>
            <a href={() => false}>Songs</a>
          </li>
          <li>
            <a href={() => false}>Fans</a>
          </li>
          <li>
            <a href={() => false}>About</a>
          </li>
        </ul>

        <p>
          <i>
            <FaUsers />
          </i>
          12.3M <span>Followers</span>
        </p>
      </div>

      <AudioList />
    </div>
  );
}

export { MainContainer };
