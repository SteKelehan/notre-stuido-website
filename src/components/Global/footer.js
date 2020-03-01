import React from "react"
import { Link } from "gatsby"

import "font-awesome/css/font-awesome.min.css"

import "../../css/main.css"

const Footer = ({ iconSize }) => {
  if (!iconSize) {
    iconSize = "fa-2x"
  }
  function fa_size(value) {
    return value + " " + iconSize
  }
  return (
    <div>
      <div className="social-icons">
        <a href="#!">
          <i className={fa_size("fa fa-twitter")}></i>
        </a>
        <a href="#!">
          <i className={fa_size("fa fa-facebook")}></i>
        </a>
        <a href="#!">
          <i className={fa_size("fa fa-instagram")}></i>
        </a>
        <a href="#!">
          <i className={fa_size("fa fa-github")}></i>
        </a>
        {/* <a href="#!">
          <img
            className="tickTok"
            src="../../images/TikTokImage.png"
            alt="TikTok"
          />
        </a> */}
      </div>

      <footer>&copy; Copyright 2019</footer>
    </div>
  )
}

export default Footer
