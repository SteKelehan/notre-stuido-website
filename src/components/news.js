import React from "react"
import Img from "gatsby-image"

const News = ({pic, title, description, date, tags}) => {
  return (
    <div className="jobs__job">
      <Img
        key={pic.id}
        objectFit="cover"
        fluid={pic.childImageSharp.fluid}
      ></Img>
      
      <h3>{title}</h3>
      <h6>{date}</h6>
      <p>
        {description}
      </p>
      {tags.map(tag=>{
        return(<h6 className="text-secondary">{tag}</h6>)
      })}
    </div>
  )
}

export default News