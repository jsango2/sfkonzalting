import { StaticQuery, graphql } from "gatsby"

import React from "react"
import styled from "styled-components"
import CMSnovostCard from "./cmsnovosticard"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const Naslov = styled.div`
  font-size: 32px;
  display: inline-block;
  font-weight: 300;
  ${"" /* width: 100%; */}
  height: auto;
  padding-left: 129px;
  margin-bottom: 30px;

  @media only screen and (max-width: 570px) {
    font-size: 26px;
    padding-left: 30px;
    padding-right: 30px;
    margin: 0 auto 30px auto;
    text-align: center;
  }
`
const Wrap = styled.div`
  width: 1230px;
  min-width: 330px;
  margin: 0 auto;
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
        top: "35%",
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
        top: "35%",
      }}
      onClick={onClick}
    />
  )
}
const CMSnovostiCarousel = () => {
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
            wp_novosti(
              last: 12
              where: { orderby: { field: DATE, order: DESC } }
            ) {
              edges {
                node {
                  id
                  title
                  slug
                  date
                  wp_gq_novost {
                    tekstNovosti
                    istaknutaFotografija {
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
        <>
          <Naslov>Novosti / Objavljeni natječaji</Naslov>
          <Wrap>
            <Slider {...settings}>
              {data.wpgraphql.wp_novosti.edges.map(novost => (
                <CMSnovostCard
                  key={novost.node.id}
                  date={novost.node.date}
                  slug={novost.node.slug}
                  naslov={novost.node.title}
                  tekst={novost.node.wp_gq_novost.tekstNovosti}
                  fotoFront={
                    novost.node.wp_gq_novost.istaknutaFotografija.sourceUrl
                  }
                  coverFoto={
                    novost.node.wp_gq_novost.sirokaFotografijaUPostu.sourceUrl
                  }
                />
              ))}
            </Slider>
          </Wrap>
        </>
      )}
    ></StaticQuery>
  )
}

export default CMSnovostiCarousel
