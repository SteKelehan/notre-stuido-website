import React from 'react'
import { graphql } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import Header from '../components/Global/header'
import Footer from '../components/Global/footer'

const ProjectPage = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, date } = data.markdownRemark.frontmatter
  return (
    <div>
      <Header current='News'/>
      <main class='news-article'>
        <article>
          
          <section className="article">
              <h1
                style={{
                  marginTop: rhythm(1),
                  marginBottom: 0,
                }}
              >
                {title}
              </h1>
              <p
                style={{
                  ...scale(-1 / 5),
                  display: `block`,
                  marginBottom: rhythm(1),
                }}
              >
                {date}
              </p>
            <section dangerouslySetInnerHTML={{ __html: html }} />
            <hr
              style={{
                marginBottom: rhythm(1),
              }}
            />
          </section>
        </article>
      </main>
      <Footer/>
    </div>
  )
}

export default ProjectPage

export const pageQuery = graphql`
  query ProjectByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
