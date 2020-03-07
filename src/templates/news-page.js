import React from "react"

import Header from "../components/Global/header"
import Footer from "../components/Global/footer"
import { useStaticQuery, graphql } from "gatsby"
import "../css/main.css"
import Img from "gatsby-image"

const News = ({ data }) => {
  console.log(data.images.nodes)

  const { title, description } = data.markdownRemark.frontmatter

  return (
    <div>
      <Header current="News"></Header>
      <main>
        <section className="news">
          <div className="news__bg_image">
            <div className="news__info">
              <h2 className="text-secondary">{title}</h2>
              <p>{description}</p>
            </div>
          </div>
          <div className="jobs">
            {data.images.nodes.map(pic => {
              if (pic.childImageSharp) {
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
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Repellat vero dolores eum ut, culpa ullam quis quasi
                      exercitationem in adipisci.
                    </p>
                  </div>
                )
              }
            })}
          </div>
          <Footer></Footer>
        </section>
      </main>
    </div>
  )
}

export default News

export const pageQuery = graphql`
  {
    images: allFile(filter: { relativeDirectory: { eq: "projects" } }) {
      nodes {
        id
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "news-page" } }) {
      frontmatter {
        title
        description
      }
    }
  }
`
