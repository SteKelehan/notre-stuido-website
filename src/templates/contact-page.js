import React from "react"

import Header from "../components/Global/header"
import Footer from "../components/Global/footer"
import "font-awesome/css/font-awesome.min.css"

import "../css/main.css"

const Contact = ({ data }) => {
  const {
    email,
    title,
    phone,
    address,
  } = data.markdownRemark.frontmatter
  const {addressLine1} = address

  return (
    <div>
      <Header current="Contact"></Header>
      <main>
        <section className="contact">
          <h2>{title}</h2>
          <div className="contact__list">
            <div className="contact__email">
              <i className="fa fa-envelope"></i> Email
              <div className="text-secondary">{email}</div>
            </div>
            <div className="contact__phone">
              <i className="fa fa-mobile-alt"></i> Phone
              <div className="text-secondary">{phone}</div>
            </div>
            <div className="contact__address">
              <i className="fa fa-marker-alt"></i> Address
              <div className="text-secondary">{addressLine1}</div>
            </div>
          </div>
          <div>
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <div>
                <span className="input-title">Your Name</span>
                <input className="contact__formName" name="name" type="text" />
                <span className="line"></span>
              </div>
              <div>
                <span className="input-title">Your Email</span>
                <input
                  className="contact__formEmail"
                  name="email"
                  type="text"
                />
                <span className="line"></span>
              </div>
              <span className="input-title">Message</span>
              <textarea className="contact__formText" name="message" id="" />
              <span className="line"></span>
            </form>
            <button className="form-button">
              Send <i className="fa fa-arrow-right"></i>
            </button>
          </div>
        </section>
        <div>
          <div className="social-icons-contact">
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
            <span className="copy-right-contact">&copy; Copyright 2019</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact

export const pageQuery = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      frontmatter {
        email
        title
        phone
        address {
          addressLine1
        }
      }
    }
  }
`
