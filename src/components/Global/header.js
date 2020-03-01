import React from "react"
import { Link } from "gatsby"

import "../../css/main.css"

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
    this.toggleClass = this.toggleClass.bind(this)
  }
  toggleClass() {
    const currentState = this.state.active
    this.setState({ active: !currentState })
    console.log(this.state)
  }

  render() {
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

    switch (this.props.current) {
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
          <span
            onClick={this.toggleClass}
            className={
              this.state.active ? "menu-btn__burger" : "menu-btn__burger open"
            }
          ></span>
        </div>
        <nav className={this.state.active ? "nav" : "nav open"}>
          <ul className={this.state.active ? "menu-nav" : "menu-nav open"}>
            <li className={this.state.active ? home : home + " open"}>
              <Link
                to="/"
                className={
                  this.state.active ? "menu-nav__link" : "menu-nav__link open"
                }
              >
                {" "}
                Home{" "}
              </Link>
            </li>
            <li className={this.state.active ? about : about + " open"}>
              <Link
                to="/about"
                className={
                  this.state.active ? "menu-nav__link" : "menu-nav__link open"
                }
              >
                {" "}
                About Us{" "}
              </Link>
            </li>
            <li className={this.state.active ? news : news + " open"}>
              <Link
                to="/news"
                className={
                  this.state.active ? "menu-nav__link" : "menu-nav__link open"
                }
              >
                {" "}
                News{" "}
              </Link>
            </li>
            <li className={this.state.active ? contact : contact + " open"}>
              <Link
                to="/contact"
                className={
                  this.state.active ? "menu-nav__link" : "menu-nav__link open"
                }
              >
                {" "}
                Contact{" "}
              </Link>
            </li>
            <li className={this.state.active ? project : project + " open"}>
              <Link
                to="/projects"
                className={
                  this.state.active ? "menu-nav__link" : "menu-nav__link open"
                }
              >
                {" "}
                Projects{" "}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
