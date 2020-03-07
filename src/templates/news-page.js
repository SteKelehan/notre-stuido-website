import React from "react"

import Header from "../components/Global/header"
import Footer from "../components/Global/footer"
import { graphql } from "gatsby"
import "../css/main.css"
import NewsCard from '../components/news'

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
                  <NewsCard pic={pic}/>
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
