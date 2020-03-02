import React from "react"
import { Link } from "gatsby"

import Header from "../components/Global/header"
import Footer from "../components/Global/footer"
import { useStaticQuery, graphql } from "gatsby"
import "../css/main.css"
import Img from "gatsby-image"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query Images {
      images: allFile(filter: { relativeDirectory: { eq: "projects" } }) {
        nodes {
          id
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  console.log(data.images.nodes)
  return (
    <div>
      <Header current={"Projects"}></Header>
      <main>
        <section className="projects">
          <div className="projects__bio-image">
            <h1 className="text-secondary">Our Projects</h1>
          </div>
          {data.images.nodes.map(pic => {
            return (
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
          })}
        </section>
        <Footer></Footer>
      </main>
    </div>
  )
}

export default Projects
