import React, { Component } from "react"
import { Link } from "gatsby"
import classnames from "classnames"
import "../../css/main.css"
import Footer from "../Global/footer"

export default class FooterAndScroller extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: false,
    }
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state

    const currentScrollPos = window.pageYOffset
    const visible = prevScrollpos !== currentScrollPos && currentScrollPos !== 0
    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    })
  }

  render() {
    if (!this.state.visible) {
      return (
        <div>
          <i
            className={classnames({
              "fa fa-angle-down fa-2x home__scroll-down": !this.state.visible,
            })}
          >
            {" "}
          </i>
          <Footer></Footer>
        </div>
      )
    } else {
      return <div></div>
    }
  }
}
