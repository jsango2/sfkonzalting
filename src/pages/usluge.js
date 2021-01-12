import React from "react"
import { Link, graphql } from "gatsby"
import timeline from "../../content/assets/images/uslugeTimeline.svg"

import Layout from "../components/layout"
import SEO from "../components/seo"
import UslugeText from "../components/uslugeText"

const usluge = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Usluge" />
      <div
        style={{
          position: "relative",
          width: "80%",
          height: "91px",
          margin: "50px auto 90px auto",
          backgroundImage: `url(${timeline})`,
          backgroundPosition: "center",
          backgroundSize: "cover ",
        }}
      ></div>
      <UslugeText />
    </Layout>
  )
}

export default usluge

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
