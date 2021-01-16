import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import { IoIosArrowBack } from "react-icons/Io"
import { IoIosArrowForward } from "react-icons/Io"
import Left from "../../content/assets/images/arrow left.svg"

import React, { useState } from "react"
import styled from "styled-components"
import CMSnovostCard from "./cmsnovosticard"
import Carousel, {
  autoplayPlugin,
  slidesToShowPlugin,
  arrowsPlugin,
} from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

const NovostiWrap = styled.div`
  ${
    "" /* display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; */
  }
  width: 100%;
  height: auto;
  ${"" /* padding-top: 86px;
  padding-bottom: 86px; */}

  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
  }
`
const Naslov = styled.div`
  font-size: 32px;
  width: 100%;
  height: auto;
  margin-left: 129px;
  margin-bottom: 30px;

  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
  }
`

const CMSnovostiCarousel = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          wpgraphql {
            wp_novosti {
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
          {/* <div
            style={{
              display: "flex",
              width: "80%",
              justifyContent: "space-between",
              margin: "0 auto 40px auto",
            }}
          > */}
          <Carousel
            plugins={[
              "infinite",
              // "arrows",
              {
                resolve: autoplayPlugin,
                options: {
                  interval: 5000,
                },
              },
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 4,
                },
              },
              {
                resolve: arrowsPlugin,
                options: {
                  arrowLeft: (
                    <button>
                      <IoIosArrowBack />
                    </button>
                  ),
                  arrowRight: (
                    <button>
                      <IoIosArrowForward />
                    </button>
                  ),
                  addArrowClickHandler: true,
                },
              },
            ]}
            // animationSpeed={1000}
            draggable={true}
          >
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
          </Carousel>
        </>
      )}
    ></StaticQuery>
  )
}

export default CMSnovostiCarousel
