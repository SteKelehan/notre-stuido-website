import React from "react"

import Header from "../components/Global/header"
import Footer from "../components/Global/footer"
import "../css/main.css"

const IndexPage = ({ data }) => {
  const {
    titleBlue,
    titleWhite,
    title,
    description,
  } = data.markdownRemark.frontmatter
  
  return (
    <div>
      <Header current={"Home"}></Header>
      <main>
        <section className="home">
          <h1 className="home__name">
            {titleWhite} <span className="home__name--last">{titleBlue}</span>
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
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        titleBlue
        titleWhite
        title
        description
      }
    }
  }
`
