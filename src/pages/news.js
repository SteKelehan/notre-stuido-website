import React from "react"

import Header from "../components/Global/header"
import Footer from "../components/Global/footer"
import "../css/main.css"

const News = () => {
  return (
    <div>
      <Header current="News"></Header>
      <main>
        <section className="news">
          <div className="news__image">
            <div className="news__info">
              <h2 className="text-secondary">News</h2>
              <p>
                This is where we will keep you all updated on our current
                projects and how Notre Studio is progresing. We will also bring
                you any news (tech and finance) we find fasinating.
              </p>
            </div>
          </div>

          <div className="jobs">
            <div className="jobs__job">
              <h2 className="text-secondary">2017 - Current</h2>
              <h3>Google</h3>
              <h6>Full Stack Developer</h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat vero dolores eum ut, culpa ullam quis quasi
                exercitationem in adipisci.
              </p>
            </div>
            <div className="jobs__job">
              <h2 className="text-secondary">2015 - 2017</h2>
              <h3>Microsoft</h3>
              <h6>Front End Developer</h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat vero dolores eum ut, culpa ullam quis quasi
                exercitationem in adipisci.
              </p>
            </div>
            <div className="jobs__job">
              <h2 className="text-secondary">2012 - 2015</h2>
              <h3>Web Design Co.</h3>
              <h6>Graphic Designer</h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat vero dolores eum ut, culpa ullam quis quasi
                exercitationem in adipisci.
              </p>
            </div>
          </div>
          <Footer></Footer>
        </section>
      </main>
    </div>
  )
}

export default News
