import React from "react"

import Header from "../components/Global/header"
import Footer from "../components/Global/footer"
import "../css/main.css"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const About = ({}) => {
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

  return (
    <div>
      <Header current={"About"}></Header>
      <main className="about">
        <section className="about__into">
          <h2 className="center">ABOUT US</h2>
          <h3 className="center padding-16 ">What we offer:</h3>
          <div className="row-padding" style={{ margin: "0 -16px" }}>
            <div className="w3-third w3-margin-bottom">
              <ul className="list w3-border w3-white center  ">
                <li className="w3-black w3-xlarge w3-padding-32">Basic</li>
                <li className="padding-16">Web Design</li>
                <li className="padding-16">Photography</li>
                <li className="padding-16">1GB Storage</li>
                <li className="padding-16">Mail Support</li>
                <li className="padding-16">
                  <h2>$ 10</h2>
                  <span className="">per month</span>
                </li>
                <li className="w3-light-grey w3-padding-24">
                  <button className="button w3-teal w3-padding-large w3-hover-black">
                    Sign Up
                  </button>
                </li>
              </ul>
            </div>

            <div className="w3-third w3-margin-bottom">
              <ul className="list w3-border w3-white center  ">
                <li className="w3-teal w3-xlarge w3-padding-32">Pro</li>
                <li className="padding-16">Web Design</li>
                <li className="padding-16">Photography</li>
                <li className="padding-16">50GB Storage</li>
                <li className="padding-16">Endless Support</li>
                <li className="padding-16">
                  <h2>$ 25</h2>
                  <span className="">per month</span>
                </li>
                <li className="w3-light-grey w3-padding-24">
                  <button className="button w3-teal w3-padding-large w3-hover-black">
                    Sign Up
                  </button>
                </li>
              </ul>
            </div>

            <div className="w3-third">
              <ul className="list w3-border w3-white center  ">
                <li className="w3-black w3-xlarge w3-padding-32">Premium</li>
                <li className="padding-16">Web Design</li>
                <li className="padding-16">Photography</li>
                <li className="padding-16">Unlimited Storage</li>
                <li className="padding-16">Endless Support</li>
                <li className="padding-16">
                  <h2>$ 25</h2>
                  <span className="">per month</span>
                </li>
                <li className="w3-light-grey w3-padding-24">
                  <button className="button w3-teal w3-padding-large w3-hover-black">
                    Sign Up
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {data.images.nodes.map(pic => {
            return (
              <div>
                <div
                  className="w3-content w3-container w3-padding-64"
                  id="about"
                >
                  <h3 className="center">ABOUT ME</h3>
                  <p className="center">
                    <em>I love photography</em>
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta reiciendis animi ab iusto tenetur quod. Unde voluptas
                    hic, inventore obcaecati exercitationem debitis consequatur
                    dolores numquam eum, architecto ullam, pariatur at?
                  </p>
                  <div className="w3-row">
                    <div className="w3-col m6 center w3-padding-large">
                      <p>
                        <b>
                          <i className="fa fa-user w3-margin-right"></i>
                          {pic.name}
                        </b>
                      </p>
                      <br />
                      <Img
                        key={pic.id}
                        fixed={pic.childImageSharp.fixed}
                        className="w3-round w3-image  "
                      />
                    </div>

                    <div className="w3-col m6 w3-hide-small w3-padding-large">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut totam, nam optio modi doloribus atque sunt blanditiis
                        provident ipsam quae molestiae nemo fugit error neque
                        nobis dolorem cupiditate at ipsa!
                      </p>
                    </div>
                  </div>
                  <p className="w3-large center padding-16">
                    We are really good at:
                  </p>
                  <p className="w3-wide">
                    <i className="fa fa-camera"></i>Photography
                  </p>
                  <div className="w3-light-grey">
                    <div
                      className="w3-container w3-padding-small w3-dark-grey center"
                      style={{ width: "90%" }}
                    >
                      90%
                    </div>
                  </div>
                  <p className="w3-wide">
                    <i className="fa fa-laptop"></i>Web Design
                  </p>
                  <div className="w3-light-grey">
                    <div
                      className="w3-container w3-padding-small w3-dark-grey center"
                      style={{ width: "90%" }}
                    >
                      85%
                    </div>
                  </div>
                  <p className="w3-wide">
                    <i className="fa fa-photo"></i>Photoshop
                  </p>
                  <div className="w3-light-grey">
                    <div
                      className="w3-container w3-padding-small w3-dark-grey center"
                      style={{ width: "90%" }}
                    >
                      75%
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          <div className="w3-row center w3-dark-grey padding-16">
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge">14+</span>
              <br />
              Partners
            </div>
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge">55+</span>
              <br />
              Projects Done
            </div>
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge">89+</span>
              <br />
              Happy Clients
            </div>
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge">150+</span>
              <br />
              Meetings
            </div>
          </div>
        </section>
      </main>
      <section className="about-footer">
        {/* <Footer iconSize="fa-4x"></Footer> */}
      </section>
    </div>
  )
}

export default About
