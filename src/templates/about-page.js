import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Global/header"
import "../css/main.css"
import "font-awesome/css/font-awesome.min.css"
import Img from "gatsby-image"

const About = ({ data }) => {

  const { title, story, values } = data.markdownRemark.frontmatter
  console.log(title)
  console.log(values)
  console.log(story)

  return (
    <div>
      <Header current={"About"}></Header>
      <main className="about">
        <section className="about__info">
          <h2 className="title">{title}</h2>
          <div className="about_messages">
            <div className="about_messages_item">
              <h3>Our Mission</h3>
              <a href="#!">
                <i className="fa fa-bullseye fa-4x"></i>
              </a>
              <div>{values.style}</div>
            </div>
            <div className="about_messages_item">
              <h3>Our Style</h3>
              <a href="#!">
                <i className="fa fa-bolt fa-4x"></i>
              </a>
              <div>{values.mission}</div>
            </div>
            <div className="about_messages_item">
              <h3>Our Promise</h3>
              <a href="#!">
                <span className="onehundrud">100</span>
                <i className="fa fa-percent fa-3x"></i>
              </a>
              <div>{values.promise}</div>
            </div>
            <div className="about_messages_item">
              <h3>Our Vibe</h3>
              <a href="#!">
                <i className="fa fa-heart fa-4x"></i>
              </a>
              <div>{values.vibe}</div>
            </div>
          </div>
        </section>

        <section>
          <div className="about__story">
            <div className="about__story-title">
              <h2>Our Story</h2>
            </div>
            <div class="timeline">
              <div class="container left">
                <div class="content">
                  <h2>2015</h2>
                  <p> {story.Y2015}</p>
                </div>
              </div>
              <div class="container right">
                <div class="content">
                  <h2>2016</h2>
                  <p>{story.Y2016}</p>
                </div>
              </div>
              <div class="container left">
                <div class="content">
                  <h2>2017</h2>
                  <p>{story.Y2017}</p>
                </div>
              </div>
              <div class="container right">
                <div class="content">
                  <h2>2018</h2>
                  <p>{story.Y2018}</p>
                </div>
              </div>
              <div class="container left">
                <div class="content">
                  <h2>2019</h2>
                  <p>{story.Y2019}</p>
                </div>
              </div>
              <div class="container right">
                <div class="content">
                  <h2>2020</h2>
                  <p>{story.Y2020}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="wrapper">
            <h2 className="about__team-heading ">Meet the team</h2>
            {data.images.nodes.map(pic => {
              return (
                <div className="info">
                  {/* <h2>Name: {pic.name}</h2> */}
                  <p className="paragraph">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta reiciendis animi ab iusto tenetur quod. Unde voluptas
                    hic, inventore obcaecati exercitationem debitis consequatur
                    dolores numquam eum, architecto ullam, pariatur at? Lorem,
                    ipsum dolor sit amet consectetur adipisicing elit. Soluta
                    reiciendis animi ab iusto tenetur quod. Unde voluptas hic,
                    inventore obcaecati exercitationem debitis consequatur
                    dolores numquam eum, architecto ullam, pariatur at?
                  </p>

                  <Img
                    key={pic.id}
                    fixed={pic.childImageSharp.fixed}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    className="round"
                  />
                </div>
              )
            })}
          </div>
        </section>
        <div>
          <div className="social-icons-about">
            <a href="#!">
              <i className="fa fa-twitter fa-2x"></i>
            </a>
            <a href="#!">
              <i className="fa fa-facebook fa-2x"></i>
            </a>
            <a href="#!">
              <i className="fa fa-instagram fa-2x"></i>
            </a>
            <a href="#!">
              <i className="fa fa-github fa-2x"></i>
            </a>
            <span className="copy-right-about">&copy; Copyright 2019</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About

export const pageQuery = graphql`
  {
    images: allFile(filter: { relativeDirectory: { eq: "aboutUs" } }) {
      nodes {
        id

        childImageSharp {
          fixed(width: 350, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
        name
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      id
      frontmatter {
        title
        story {
          Y2015
          Y2016
          Y2019
          Y2017
          Y2018
          Y2020
        }
        values {
          mission
          promise
          vibe
          style
        }
      }
    }
  }
`
