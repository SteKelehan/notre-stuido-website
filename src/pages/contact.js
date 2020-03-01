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
        <section class="contact">
          <h2>Contact Us</h2>
          <div class="contact__list">
            <div class="contact__email">
              <i class="fa fa-envelope"></i> Email
              <div class="text-secondary">notrebigdata@gmail.com</div>
            </div>
            <div class="contact__phone">
              <i class="fa fa-mobile-alt"></i> Phone
              <div class="text-secondary">+44 (0) 748 424 1871</div>
            </div>
            <div class="contact__address">
              <i class="fa fa-marker-alt"></i> Address
              <div class="text-secondary">In the cloud</div>
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
