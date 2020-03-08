import React from "react"
import Header from "../components/Global/header"
import Footer from "../components/Global/footer"
import footerAndScoller from "../components/indexPage/footerAndScroller"
import "../css/main.css"
import FooterAndScroller from "../components/indexPage/footerAndScroller"

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
          <FooterAndScroller></FooterAndScroller>
        </section>
        <section className="home-wrapper">
          <h2 className="title">Our Services</h2>
          <div className="boxes">
            <div class="box">
              <i class="fa fa-globe fa-4x"> </i>
              <h3>Analytics</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                maiores reprehenderit in dicta dolorem! Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Vero maiores reprehenderit in
                dicta dolorem!
              </p>
            </div>
            <div class="box">
              <i class="fa fa-globe fa-4x"> </i>
              <h3>Marketing</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                maiores reprehenderit in dicta dolorem! Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Vero maiores reprehenderit in
                dicta dolorem!
              </p>
            </div>
            <div class="box">
              <i class="fa fa-users fa-4x"> </i>
              <h3>Support</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                maiores reprehenderit in dicta dolorem! Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Vero maiores reprehenderit in
                dicta dolorem!
              </p>
            </div>
            <div class="box">
              <i class="fa fa-cog fa-4x"> </i>
              <h3>Development</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                maiores reprehenderit in dicta dolorem! Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Vero maiores reprehenderit in
                dicta dolorem!
              </p>
            </div>
          </div>
        </section>

        <section className="home-wrapper">
          <h2 className="title">Our Packages</h2>
          <div className="boxes">
            <div class="box">
              <i class="fa fa-facebook fa-3x "> </i>
              <h3>Bronze</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                maiores reprehenderit in dicta dolorem! Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Vero maiores reprehenderit in
                dicta dolorem!
              </p>
            </div>
            <div class="box">
              <i class="fa fa-facebook fa-3x "> </i>
              <i class="fa fa-facebook fa-3x "> </i>
              <h3>Silver</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                maiores reprehenderit in dicta dolorem! Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Vero maiores reprehenderit in
                dicta dolorem!
              </p>
            </div>
            <div class="box">
              <i class="fa fa-facebook fa-3x "> </i>
              <i class="fa fa-facebook fa-3x "> </i>
              <i class="fa fa-facebook fa-3x "> </i>
              <h3>Gold</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                maiores reprehenderit in dicta dolorem! Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Vero maiores reprehenderit in
                dicta dolorem!
              </p>
            </div>
          </div>
        </section>
        <div>
          <div className="social-icons-home">
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
            <span className="copy-right-home">&copy; Copyright 2019</span>
          </div>
        </div>
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
