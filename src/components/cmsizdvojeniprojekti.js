import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import CMSizdvojeniCard from "./cmsizdvojenicard"
import { StaticQuery, graphql } from "gatsby"
import Carousel, {
  autoplayPlugin,
  slidesToShowPlugin,
  arrowsPlugin,
} from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import { IoIosArrowBack } from "react-icons/Io"
import { IoIosArrowForward } from "react-icons/Io"

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

const CMSizdvojeniProjekti = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          wpgraphql {
            wp_projekti {
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
                      sourceUrl
                    }
                    sirokaFotografijaUPostu {
                      sourceUrl
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
          <Naslov>Izdvojeni projekti</Naslov>
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
                    <button className="ArrowsIzdvojeno">
                      <IoIosArrowBack />
                    </button>
                  ),
                  arrowRight: (
                    <button className="ArrowsIzdvojeno">
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
            {data.wpgraphql.wp_projekti.edges.map(projekt => (
              <CMSizdvojeniCard
                key={projekt.node.id}
                date={projekt.node.date}
                slug={projekt.node.slug}
                naslov={projekt.node.title}
                uvodUprojekt={projekt.node.wp_gr_projekt.uvodUProjekt}
                ulogaUprojektu={
                  projekt.node.wp_gr_projekt.ulogaSfKonzaltingaUProjektu
                }
                fotoFront={projekt.node.wp_gr_projekt.istaknutaSlika.sourceUrl}
                coverFoto={
                  projekt.node.wp_gr_projekt.sirokaFotografijaUPostu.sourceUrl
                }
              />
            ))}
          </Carousel>
        </>
      )}
    ></StaticQuery>
  )
}

export default CMSizdvojeniProjekti
