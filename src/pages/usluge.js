import React, { Component } from "react"

import { graphql } from "gatsby"
import Lottie from "lottie-react"
import LottieDesktop from "../../content/assets/images/Vodoravna tablet.json"
import SEO from "../components/seo"
import UslugeText from "../components/uslugeText"
import PhotoGrid from "../components/photogrid"
import styled from "styled-components"
import PhotoGridMob from "../components/photogridmob"

import Header from "../components/header"
import Footer from "../components/footer"

const MobileHide = styled.div`
  width: 90%;
  margin: 50px auto 90px auto;
  @media only screen and (max-width: 550px) {
    display: none;
  }
`

class usluge extends Component {
  render() {
    return (
      <>
        <Header />
        <SEO title="Usluge" />
        <MobileHide>
          <Lottie
            style={{ width: "88%", margin: "0 auto", opacity: "0.6" }}
            animationData={LottieDesktop}
            loop={false}
          />
        </MobileHide>

        <UslugeText />

        <PhotoGrid />

        <PhotoGridMob />
        <Footer />
      </>
    )
  }
}

export default usluge

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
