import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="./images/Logonetflix.png"
        alt="Netflix Logo"
      />

      <ul className="list">
        <li>
          <a href="/index.html">Home</a>
        </li>
        <li>
          <a href="/index.html">TV Shows</a>
        </li>
        <li>
          <a href="/index.html">Movies</a>
        </li>
        <li>
          <a href="/index.html">New & Popular</a>
        </li>
        <li>
          <a href="/index.html">My List</a>
        </li>
      </ul>

      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default Nav;
