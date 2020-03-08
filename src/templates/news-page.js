import React from "react"
import Header from "../components/Global/header"
import Footer from "../components/Global/footer"
import { graphql } from "gatsby"
import "../css/main.css"
import NewsCard from "../components/news"


const News = ({ data }) => {
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
            {data.allMarkdownRemark.edges.map(edge => {
              if (edge.node.frontmatter.featuredimage.childImageSharp) {
                return (
                  <NewsCard
                    pic={edge.node.frontmatter.featuredimage}
                    title={edge.node.frontmatter.title}
                    description={edge.node.frontmatter.description}
                    date={edge.node.frontmatter.date}
                    tags={edge.node.frontmatter.tags}
                  />
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
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { templateKey: { eq: "news-article" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            tags
            date(formatString: "MMMM DD, YYYY")
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
    markdownRemark(frontmatter: { templateKey: { eq: "news-page" } }) {
      frontmatter {
        title
        description
        image {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
