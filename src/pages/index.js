import React, { useRef } from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Hero from "../components/hero"
import CTAusluge from "./../components/ctausluge"
import CMSnovostiCarousel from "../components/cmscarouselnovosti"
import CMSizdvojeniProjekti from "./../components/cmsizdvojeniprojekti"
import Onama from "../components/onamaFront"
import Brojke from "../components/brojke"
import Testimonial from "../components/testimonial"
import Mapa from "./../components/mapa"
import { useHasBeenVisible } from "./../components/useVisibility"
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Header from "../components/header"
import Footer from "../components/footer"

const BlogIndex = ({ data, location }) => {
  // ------visibility lazy loading------------

  const halfPage = useRef()
  const preload = useRef()
  const hasScrolled = useHasBeenVisible(halfPage)
  const isScrolling = useHasBeenVisible(preload)
  // -------------
  const testimonial = useRef()
  const preload2 = useRef()
  const hasScrolled2 = useHasBeenVisible(testimonial)
  const isScrolling2 = useHasBeenVisible(preload2)
  // ------------------
  // ----------visibility sensor------------

  return (
    <>
      <Header />
      <SEO title="Početna" />

      <Hero />
      <CTAusluge />
      <CMSnovostiCarousel />
      <div ref={halfPage}></div>
      {hasScrolled || isScrolling ? (
        <>
          <CMSizdvojeniProjekti naslov={"Izdvojeni projekti"} />
        </>
      ) : (
        <div
          style={{
            minHeight: "316px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Loader type="Rings" color="#71A8BF" height={100} width={100} />
        </div>
      )}
      <Onama />
      <Brojke />
      <div ref={testimonial}></div>
      {hasScrolled2 || isScrolling2 ? (
        <Testimonial />
      ) : (
        <div
          style={{
            minHeight: "350px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Loader type="Rings" color="#71A8BF" height={100} width={100} />
        </div>
      )}

      <Mapa />
      <Footer />
    </>
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
  }
`
