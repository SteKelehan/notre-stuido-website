import React from "react"
import { Link } from "gatsby"

import Header from "../components/Global/header"
import Footer from "../components/Global/footer"
import "../css/main.css"

const IndexPage = ({ data }) => {
  const title = data.allMarkdownRemark.edges[0].node.frontmatter.title.split(' ')
  const  description = data.allMarkdownRemark.edges[0].node.frontmatter.description
  
  return (
    <div>
      <Header current="Home"></Header>
      <main>
        <section className="home">
          <h1 className="home__name">
            {title[0]} <span className="home__name--last">{title[1]}</span>
          </h1>
          <h2>{description}</h2>
          <Footer></Footer>
        </section>
      </main>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { page: { eq: "Home" } } }) {
      edges {
        node {
          frontmatter {
            description
            page
            title
          }
        }
      }
    }
  }
`
