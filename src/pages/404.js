import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <>
      <Header />
      <SEO title="404: Stranica ne postoji" />
      <div
        style={{
          height: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>404: Stranica ne postoji</h1>
        <p>Stranica koju ste upisali ne postoji. Provjerite vaš link</p>
      </div>
      <Footer />
    </>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
