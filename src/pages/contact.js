import React from "react"
import { Link } from "gatsby"

import Header from "../components/Global/header"
import Footer from "../components/Global/footer"
import "font-awesome/css/font-awesome.min.css"

import "../css/main.css"

const Contact = () => {
  return (
    <div>
      <Header current="Contact"></Header>
      <main>
        <section className="contact">
          <h2>Contact Us</h2>
          <div className="contact__list">
            <div className="contact__email">
              <i className="fa fa-envelope"></i> Email
              <div className="text-secondary">notrebigdata@gmail.com</div>
            </div>
            <div className="contact__phone">
              <i className="fa fa-mobile-alt"></i> Phone
              <div className="text-secondary">+44 (0) 748 424 1871</div>
            </div>
            <div className="contact__address">
              <i className="fa fa-marker-alt"></i> Address
              <div className="text-secondary">In the cloud</div>
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
          <Footer iconSize="fa-4x"></Footer>
        </section>
      </main>
    </div>
  )
}

export default Contact
