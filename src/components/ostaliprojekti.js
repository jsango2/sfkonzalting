import React from "react"
import styled from "styled-components"
import CMSizdvojeniCard from "./cmsizdvojenicard"
import { StaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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

const CMSostaliProjekti = () => {
  const settings = {
    lazyLoad: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "izdvojeniSlider",
  }
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
          <Slider {...settings}>
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
          </Slider>
        </>
      )}
    ></StaticQuery>
  )
}

export default CMSostaliProjekti
