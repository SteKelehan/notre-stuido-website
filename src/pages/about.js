import React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/Global/header"
import Footer from "../components/Global/footer"
import "../css/main.css"

const About = () => {
  return (
    <div>
      <Header current="About"></Header>
      <main>
        <section className="about">
          <Footer></Footer>
        </section>
      </main>
    </div>
  )
}

export default About

// export const pageQuery = graphql`

// `