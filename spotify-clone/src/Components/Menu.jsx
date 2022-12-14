import React, { useEffect } from "react";

function Menu(props) {
  useEffect(() => {
    const allLi = document.querySelector(".MenuContainer ul").querySelectorAll("li");

    function changeMenuActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allLi.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);

  return (
    <div className="MenuContainer">
      <p className="title">{props.title}</p>
      <ul>
        {props.menuObject &&
          props.menuObject.map((menu) => (
            <li key={menu.id}>
              <a href={() => false}>
                <i>{menu.icon}</i>
                <span>{menu.name}</span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export { Menu };
