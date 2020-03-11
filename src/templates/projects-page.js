import React from "react"

import Header from "../components/Global/header"
import Footer from "../components/Global/footer"
import { graphql } from "gatsby"
import "../css/main.css"
import Project from "../components/project"

const Projects = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter
  const edges = data.allMarkdownRemark.edges
  return (
    <div>
      <Header current={"Projects"}></Header>
      <main>
        <section className="projects">
          <div className="projects__bio-image">
            <h1 className="text-secondary">{title}</h1>
          </div>
          {edges.map(edge => {
            const pic = edge.node.frontmatter.featuredimage
            if (pic.childImageSharp) {
              return <Project key={edge.node.id} pic={pic} />
            }
          })}
        </section>
        <Footer></Footer>
      </main>
    </div>
  )
}

export default Projects

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { templateKey: { eq: "project" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "projects-page" } }) {
      frontmatter {
        title
      }
    }
  }
`
