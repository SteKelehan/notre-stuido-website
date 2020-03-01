import React from "react"
import { Link } from "gatsby"

import Header from "../components/Global/header"
import Footer from "../components/Global/footer"
import { useStaticQuery, graphql } from "gatsby"
import "../css/main.css"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAsset {
        edges {
          node {
            file {
              url
            }
          }
        }
      }
    }
  `)
  console.log(data.allContentfulAsset.edges)
  return (
    <div>
      <Header current="Projects"></Header>
      <main>
        <section className="projects">
          <div className="projects__bio-image">
            <h1 className="text-secondary">Our Projects</h1>
          </div>
          {data.allContentfulAsset.edges.map(pic => {
            return (
              <div key={pic}>
                <div className="projects__item">
                  <img src={pic.node.file.url} alt="Pic not showing" />
                  <div className="projects__btns">
                    <a href="#!" className="projects__btn">
                      <i className="fa fa-eye"></i> Preview
                    </a>
                    <a href="#!" className="projects__btn">
                      <i className="fa fa-github"></i> Github
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </section>
        <Footer></Footer>
      </main>
    </div>
  )
}

export default Projects
