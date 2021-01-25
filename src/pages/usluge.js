import React, { Component } from "react"

import { graphql } from "gatsby"
import timeline from "../../content/assets/images/uslugeTimeline.svg"
import Lottie from "lottie-react"
import LottieDesktop from "../../content/assets/images/Vodoravna tablet.json"
import Layout from "../components/layout"
import SEO from "../components/seo"
import UslugeText from "../components/uslugeText"
import PhotoGrid from "../components/photogrid"
import styled from "styled-components"
import PhotoGridMob from "../components/photogridmob"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import photo1 from "../../content/assets/images/1.png"
import photo2 from "../../content/assets/images/2.png"
import Header from "../components/header"

const MobileHide = styled.div`
  width: 95%;
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
          />
        </MobileHide>

        <UslugeText />

        <PhotoGrid />

        <PhotoGridMob />
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
