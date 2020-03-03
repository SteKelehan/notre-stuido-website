import React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/Global/header"
import Footer from "../components/Global/footer"
import "../css/main.css"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const About = ({}) => {
  const NyashaBio = (
    <div>
      Hi my name is Nyasha. I am a software Engineer and have been in then
      indistruy for many years. I only accept perfection.....
    </div>
  )

  const SteBio = (
    <div>
      Hi my name is Ste. I am a software Engineer and have been in then
      indistruy for many years. I only accept perfection.....
    </div>
  )

  const data = useStaticQuery(graphql`
    query Photos {
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
    }
  `)

  console.log(data)

  return (
    <div>
      <Header current={"About"}></Header>
      <main className="about">
        <section className="intro">
          {data.images.nodes.map(pic => {
            return (
              <Img
                key={pic.id}
                fixed={pic.childImageSharp.fixed}
                className="about__images"
              />
            )
          })}
        </section>
      </main>
      <section className="about-footer">
        <Footer iconSize="fa-4x"></Footer>
      </section>
    </div>
  )
}

export default About

// export const pageQuery = graphql`

// `