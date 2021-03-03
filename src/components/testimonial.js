import React from "react"
import styled from "styled-components"
import background from "../../content/assets/images/bckg.png"
import { StaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const Wrap = styled.div`
  ${"" /* display: flex; */}
  ${"" /* align-items: center;
  justify-content: center; */}
  position: relative;
  width: 100%;
  height: 444px;
  ${"" /* z-index: 1; */}
  ${"" /* @media only screen and (max-width: 48em) {
    height: 495px;
  } */}
`

const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    104.94deg,
    #ac84bc -2.06%,
    #a684bc 0.62%,
    #9382bc 4.8%,
    #747fbd 9.93%,
    #6c7ebd 11.03%,
    #6c84c1 15.14%,
    #6a94cc 22.13%,
    #67aee0 31.08%,
    #63c6f1 37.75%,
    #95d2dc 55.17%,
    #b7dece 72.23%,
    #c3e3c8 81.94%,
    #eba8c1 108.52%,
    #bc9fba 114.7%,
    #9799b5 120.31%,
    #8095b2 124.69%,
    #7794b1 127.27%
  );
  transform: rotate(180deg);
  width: 100%;
  opacity: 0.9;
`

const OverlayNaslovDrugiOnama = styled.div`
  font-weight: 300;
  font-size: 32px;
  text-align: center;
  color: white;
  position: absolute;
  z-index: 150;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 560px) {
    display: none;
  }
`
const AutorTestimoniala = styled.div`
  text-align: center;
  font-size: 22px;
  font-weight: 300;
  line-height: 28.49px;
  margin-top: 10px;
  color: white;

  @media only screen and (max-width: 360px) {
    margin-top: 60px;

    font-size: 16px;
    line-height: 19.5px;
  }
`
const ZanimanjeAutora = styled.div`
  text-align: center;
  font-size: 16px;
  ${"" /* font-style: italic; */}
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
  position: relative;
  z-index: 100;
  width: 668px;
  ${"" /* height: 30px; */}
  text-align: center;
  font-size: 22px;
  font-weight: 300;
  line-height: 28.49px;
  margin: 170px auto 30px auto;
  color: white;
  @media only screen and (max-width: 830px) {
    width: 85%;
  }
  @media only screen and (max-width: 560px) {
    font-size: 19px;

    width: 90%;
    margin-top: 150px;
  }
  @media only screen and (max-width: 440px) {
    margin-top: 150px;
    width: 85%;
    font-size: 16px;
    line-height: 19.5px;
  }
`
function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <IoIosArrowForward
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
        zIndex: "150",
        top: "60%",
      }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <IoIosArrowBack
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
        zIndex: "150",
        top: "60%",
      }}
      onClick={onClick}
    />
  )
}

const Testimonial = () => {
  const settings = {
    // arrows: true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: "testimonialSlider",
    responsive: [
      {
        breakpoint: 450,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          lazyLoad: true,
          arrows: false,
          speed: 500,
        },
      },
    ],
  }
  return (
    <StaticQuery
      query={graphql`
        {
          wpgraphql {
            wp_izjave {
              edges {
                node {
                  wp_gq_izjava {
                    tekstIzjave
                    zanimanjeAutoraIzjave
                  }
                  title
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Wrap>
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundImage: `url(${background})`,
              backgroundPosition: "center",
              backgroundSize: "cover ",
            }}
          ></div>
          {/* {console.log(data)} */}
          <Overlay />
          <OverlayNaslovDrugiOnama>Drugi o nama</OverlayNaslovDrugiOnama>
          <Slider {...settings}>
            {data.wpgraphql.wp_izjave.edges.map(testimonial => (
              <div key={testimonial.node.title} className="visibleContent">
                <Paragraf
style={{ fontStyle: "italic" }}
                  dangerouslySetInnerHTML={{
                    __html: testimonial.node.wp_gq_izjava.tekstIzjave,
                  }}
                />
                <AutorTestimoniala> {testimonial.node.title}</AutorTestimoniala>
                <ZanimanjeAutora>
                  {" "}
                  {testimonial.node.wp_gq_izjava.zanimanjeAutoraIzjave}
                </ZanimanjeAutora>
              </div>
            ))}
          </Slider>
        </Wrap>
      )}
    ></StaticQuery>
  )
}

export default Testimonial
