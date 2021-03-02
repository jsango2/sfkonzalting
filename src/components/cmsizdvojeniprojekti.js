import React from "react"
import styled from "styled-components"
import CMSizdvojeniCard from "./cmsizdvojenicard"
import { StaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const Naslov = styled.div`
  font-size: 32px;
  font-weight: 300;
  height: auto;
  margin-left: 129px;
  margin-bottom: 30px;

  @media only screen and (max-width: 570px) {
    font-size: 26px;
    padding-left: 30px;
    padding-right: 30px;
    margin: 0 auto 30px auto;
    text-align: center;
  }
`
const WrappAll = styled.div`
  height: 500px;
  ${"" /* margin-bottom: 40px;   */}
  @media only screen and (max-width: 570px) {
  }
`
const Wrap = styled.div`
  width: 1230px;
  min-width: 330px;
  margin: 0 auto;
  height: 345px;
  @media only screen and (max-width: 1100px) {
    width: 900px;
  }
  @media only screen and (max-width: 780px) {
    width: 100%;
  }

  @media only screen and (max-width: 570px) {
    width: 100%;
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
        color: "grey",
        zIndex: "150",
        top: "50%",
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
        color: "grey",
        zIndex: "150",
        top: "50%",
      }}
      onClick={onClick}
    />
  )
}

const CMSizdvojeniProjekti = props => {
  const settings = {
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "novostiSlider",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          lazyLoad: true,
          arrows: true,
          infinite: true,
          speed: 500,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          lazyLoad: true,
          arrows: true,
          infinite: true,
          speed: 500,
        },
      },
      {
        breakpoint: 633,
        settings: {
          className: "center",
          centerMode: true,
          centerPadding: "40px",
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
            wp_projekti (first: 12){
              edges {
                node {
                  id
                  title
                  date
                  slug
                  wp_gr_projekt {
                    klijentiznosinstitucija
                    ulogaSfKonzaltingaUProjektu
                    uvodUProjekt
                    istaknutaSlika {
                      sourceUrl(size: MEDIUM_LARGE)
                    }
                    sirokaFotografijaUPostu {
                      sourceUrl(size: LARGE)
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <WrappAll>
          <Naslov style={{ marginTop: "70px" }}>{props.naslov}</Naslov>
          <Wrap>
            <Slider {...settings}>
              {data.wpgraphql.wp_projekti.edges.slice(0, 12).map(projekt => (
                <CMSizdvojeniCard
                  key={projekt.node.id}
                  date={projekt.node.date}
                  slug={projekt.node.slug}
                  naslov={projekt.node.title}
                  uvodUprojekt={projekt.node.wp_gr_projekt.uvodUProjekt}
                  ulogaUprojektu={
                    projekt.node.wp_gr_projekt.ulogaSfKonzaltingaUProjektu
                  }
                  fotoFront={
                    projekt.node.wp_gr_projekt.istaknutaSlika.sourceUrl
                  }
                  coverFoto={
                    projekt.node.wp_gr_projekt.sirokaFotografijaUPostu.sourceUrl
                  }
                />
              ))}
            </Slider>
          </Wrap>
        </WrappAll>
      )}
    ></StaticQuery>
  )
}

export default CMSizdvojeniProjekti
