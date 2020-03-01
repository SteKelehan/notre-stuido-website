import React from "react"

import Header from "../components/Global/header"
import Footer from "../components/Global/footer"
import "../css/main.css"

const IndexPage = () => {
  return (
    <div>
      <Header current={"Home"}></Header>
      <main>
        <section className="home">
          <h1 className="home__name">
            Notre <span className="home__name--last">Studio</span>
          </h1>
          <h2>Web Developers, Designers & Programmers</h2>
          <Footer></Footer>
        </section>
      </main>
    </div>
  )
}

export default IndexPage
