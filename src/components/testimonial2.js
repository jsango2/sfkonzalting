import React from "react"
import styled from "styled-components"

import background from "../../content/assets/images/bckg.png"

import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.css"

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 480px;
  z-index: 20;
  @media only screen and (max-width: 48em) {
    height: 495px;
  }
`
// const VisibleContent = styled.div`
//   width: 100%;
//   height: 100%;
//   position: relative;
// `
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #71a8bfe6;
  z-index: 2;
  //
`

const AutorTestimoniala = styled.div`
  textalign: center;
  font-size: 22px;
  font-weight: 300;
  line-height: 28.49px;
  margin-top: 50px;
  color: white;
  @media only screen and (max-width: 48em) {
    margin-top: 130px;
  }
  @media only screen and (max-width: 360px) {
    margin-top: 110px;

    font-size: 16px;
    line-height: 19.5px;
  }
`
const ZanimanjeAutora = styled.div`
  text-align: center;
  font-size: 22px;
  font-style: italic;
  font-weight: 300;
  line-height: 28.49px;
  margin: 0 auto;
  color: white;
  width: 60%;
  @media only screen and (max-width: 430px) {
    width: 75%;
    margin: 0 auto;
    font-size: 19px;
  }
  @media only screen and (max-width: 360px) {
    font-size: 16px;
    line-height: 19.5px;
  }
`

const Paragraf = styled.div`
  width: 668px;
  height: 110px;
  text-align: center;
  font-size: 22px;
  font-weight: 300;
  line-height: 28.49px;
  margin: 170px auto 0 auto;
  color: white;
  @media only screen and (max-width: 48em) {
    font-size: 19px;

    width: 90%;
    margin-top: 150px;
  }
  @media only screen and (max-width: 360px) {
    margin-top: 200px;
    width: 85%;
    font-size: 16px;
    line-height: 19.5px;
  }
`

const Testimonial2 = () => {
  return (
    <>
      <Wrap>
        <Overlay />

        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover ",
            zIndex: "1",
          }}
        ></div>

        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={8100}
          showIndicators={true}
        >
          <div className="visibleContent">
            <Paragraf>ssssssssssssssssssssssssssss</Paragraf>

            <AutorTestimoniala>Jure</AutorTestimoniala>
            <ZanimanjeAutora>Nesto</ZanimanjeAutora>
          </div>
          <div className="visibleContent">
            <Paragraf>ssssssssssssssssssssssssssss</Paragraf>

            <AutorTestimoniala>Jure</AutorTestimoniala>
            <ZanimanjeAutora>Nesto</ZanimanjeAutora>
          </div>
        </Carousel>
      </Wrap>
    </>
  )
}

export default Testimonial2
