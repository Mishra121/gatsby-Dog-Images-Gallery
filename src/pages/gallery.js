import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import InfiniteImages from "../components/InfiniteImages";

const Gallery = () => {
    return (
      <Layout>
        <SEO title="Gallery" />
        <h1 className="is-size-3">Images from Unsplash...</h1>
        <p style={{ marginBottom: "5%" }}>
          So here we can see the good images, for as
          long as you keep scrolling, you shall find more dog images <span>🐶 🐕</span>.
        </p>
        <InfiniteImages />
      </Layout>
    )
  }
  
  export default Gallery