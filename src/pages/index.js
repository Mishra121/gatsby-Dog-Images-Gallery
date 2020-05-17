import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "bulma/css/bulma.min.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="has-text-centered" style={{ marginTop: "20%" }}>
      <h1 className="is-size-2">Welcome to This Page!  . . .  😹</h1>
      <p className="is-size-5" style={{ marginTop: "2%" }}>
        You can see an infinite image gallery of dogs here built with Gatsby, and
        Images served using Netlify and Unsplash. Let's Go!
      </p>
      <button className="button is-dark is-large" style={{ marginTop: "10%" }}>
        <Link to="/gallery/" className="has-text-white">
          Open Gallery! 🔥
        </Link>
      </button>
    </div>
  </Layout>
)

export default IndexPage
