import React from "react"
import { Link } from "gatsby"

import "../../css/main.css"

const Header = ({ current }) => {
  var active = "menu-nav__item active"
  var home = "menu-nav__item",
    about = "menu-nav__item",
    news = "menu-nav__item",
    contact = "menu-nav__item",
    project = "menu-nav__item"

  // function reverse() {
  //   showMenu = !showMenu
  // }

  // function chooseMenu(classN) {
  //   if (showMenu) {
  //     classN += " open"
  //   }
  //   console.log(classN)
  //   return classN
  // }

  switch (current) {
    case "Home":
      home = active
      break
    case "About":
      about = active
      break
    case "Projects":
      project = active
      break
    case "Contact":
      contact = active
      break
    case "News":
      news = active
      break
  }

  return (
    <header>
      <div className="menu-btn">
        <span className="menu-btn__burger"></span>
      </div>
      <nav className="nav">
        <ul className="menu-nav">
          <li className={home}>
            <Link to="/" className="menu-nav__link">
              {" "}
              Home{" "}
            </Link>
          </li>
          <li className={about}>
            <Link to="/about" className="menu-nav__link">
              {" "}
              About Us{" "}
            </Link>
          </li>
          <li className={news}>
            <Link to="/news" className="menu-nav__link">
              {" "}
              News{" "}
            </Link>
          </li>
          <li className={project}>
            <Link to="/projects" className="menu-nav__link">
              {" "}
              Projects{" "}
            </Link>
          </li>
          <li className={contact}>
            <Link to="/contact" className="menu-nav__link">
              {" "}
              Contact{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
