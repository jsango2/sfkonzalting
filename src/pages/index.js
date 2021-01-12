import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import CTAusluge from "./../components/ctausluge"
import CMSnovostiCarousel from "../components/cmscarouselnovosti"
import CMSizdvojeniProjekti from "./../components/cmsizdvojeniprojekti"
import Onama from "../components/onama"
import Brojke from "../components/brojke"
import Testimonial from "../components/testimonial"
import Mapa from "./../components/mapa"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Hero />
      <CTAusluge />
      <CMSnovostiCarousel />
      <CMSizdvojeniProjekti />
      <Onama />
      <Brojke />
      <Testimonial />
      <Mapa />
    </Layout>
  )
}

export default BlogIndex

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
