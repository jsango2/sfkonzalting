import React from "react"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"
import CMSizdvojeniCardMobLayout from "./cmsizdvojenicardmoblayout"

const Wrap = styled.div`
  width: 100%;
  min-height: 550px;
  padding-top: 50px;
  padding-bottom: 86px;
  background: rgba(196, 196, 196, 0.1);
  @media only screen and (max-width: 538px) {
    padding-bottom: 46px;
  }
`
const Naslov = styled.div`
  font-size: 32px;
  font-weight: 300;
  width: 90%;
  height: auto;
  text-align: center;
  margin: 0 auto 50px auto;

  @media only screen and (max-width: 60em) {
  }
`
const WrapProjekti = styled.div`
  display: flex;

  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto 40px auto;

  @media only screen and (max-width: 60em) {
  }
`

const OnamaTriProjekta = ({ data }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          wpgraphql {
            wp_projekti(where: { categoryName: "ponosni_projekt" }) {
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
        <Wrap>
          <Naslov>Tri projekta na koje smo posebno ponosni</Naslov>
          <WrapProjekti>
            {data.wpgraphql.wp_projekti.edges.slice(0, 3).map(projekt => (
              <CMSizdvojeniCardMobLayout
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
          </WrapProjekti>
        </Wrap>
      )}
    ></StaticQuery>
  )
}

export default OnamaTriProjekta
