import React from 'react'
import Img from "gatsby-image"

const Project = ({pic}) => {
  return(
    <div className="projects__item">
    <Img
      key={pic.id}
      fluid={pic.childImageSharp.fluid}
      className="gimg"
    ></Img>
    <div className="projects__btns">
      <a href="#!" className="projects__btn">
        <i className="fa fa-eye fa-4x"></i>
        <div>Preview</div>
      </a>
      <a href="#!" className="projects__btn">
        <i className="fa fa-github fa-4x"></i>
        <div>Github</div>
      </a>
    </div>
  </div>
  )
}

export default Project