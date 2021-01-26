import React, { Component } from "react"
import styled from "styled-components"
import photo1 from "../../content/assets/images/p1.jpg"
import photo2 from "../../content/assets/images/p2.jpg"
import photo3 from "../../content/assets/images/p3.jpg"
import photo4 from "../../content/assets/images/p4.jpg"

const PhotoWrap = styled.div`
  width: 100%;
  height: 1200px;
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
            filter: "grayscale(100%)",
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
            filter: "grayscale(100%)",

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
            filter: "grayscale(100%)",

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
            filter: "grayscale(100%)",

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
          {/* <FooterSocMreze /> */}
        </div>
      </PhotoWrap>
    )
  }
}

export default PhotoGridMob
