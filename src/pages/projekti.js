import React from "react"
import { Link, graphql } from "gatsby"
import timeline from "../../content/assets/images/uslugeTimeline.svg"

import Layout from "../components/layout"
import SEO from "../components/seo"
import UslugeText from "../components/uslugeText"
import PhotoGrid from "../components/photogrid"

const Projekti = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Projekti" />
    </Layout>
  )
}

export default Projekti

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
