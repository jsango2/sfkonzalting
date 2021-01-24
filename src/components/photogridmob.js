import React, { Component } from "react"
import styled from "styled-components"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import photo1 from "../../content/assets/images/1.png"
import photo2 from "../../content/assets/images/2.png"
import photo3 from "../../content/assets/images/3.png"
import photo4 from "../../content/assets/images/4.png"
import Footer from "./footer"
import FooterSocMreze from "./footerSocMreze"

const PhotoWrap = styled.div`
  width: 100%;

  ${"" /* padding-top: 86px;
  padding-bottom: 86px; */}
  height: 1400px;
  @media only screen and (min-width: 550px) {
    display: none;
  }
`

class PhotoGridMob extends Component {
  render() {
    return (
      <PhotoWrap>
        <div
          style={{
            position: "sticky",
            top: "0",
            width: "100%",
            height: "300px",
            backgroundImage: `url(${photo1})`,
            backgroundPosition: "center",
            backgroundSize: "cover ",
            zIndex: "1",
          }}
        />
        <div
          style={{
            position: "sticky",
            top: "60px",
            width: "100%",
            height: "300px",
            backgroundImage: `url(${photo2})`,
            backgroundPosition: "center",
            backgroundSize: "cover ",
            zIndex: "1",
          }}
        />
        <div
          style={{
            position: "sticky",
            top: "100px",
            width: "100%",
            height: "300px",
            backgroundImage: `url(${photo3})`,
            backgroundPosition: "center",
            backgroundSize: "cover ",
            zIndex: "1",
          }}
        />
        <div
          style={{
            position: "sticky",
            top: "120px",
            height: "300px",
            backgroundImage: `url(${photo4})`,
            backgroundPosition: "center",
            backgroundSize: "cover ",
            zIndex: "1",
          }}
        />
        <div
          style={{
            position: "sticky",
            top: "140px",
            zIndex: "1",
          }}
        >
          <FooterSocMreze />
        </div>
      </PhotoWrap>
    )
  }
}

export default PhotoGridMob
