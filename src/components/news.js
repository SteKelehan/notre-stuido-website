import React from "react"
import Img from "gatsby-image"

const News = ({pic}) => {
  return (
    <div className="jobs__job">
      <Img
        key={pic.id}
        objectFit="cover"
        fluid={pic.childImageSharp.fluid}
      ></Img>
      <h2 className="text-secondary">2017 - Current</h2>
      <h3>Google</h3>
      <h6>Full Stack Developer</h6>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vero
        dolores eum ut, culpa ullam quis quasi exercitationem in adipisci.
      </p>
    </div>
  )
}

export default News