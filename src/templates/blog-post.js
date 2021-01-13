import React, { useRef } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Cover from "../../content/assets/images/coverProjekt.png"

import SEO from "../components/seo"
import Layout from "../components/layout"

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`

const CmsSinglePost = styled.div`
  display: flex;
  flex-direction: column;
  ${"" /* box-sizing: border-box; */}
  margin: 5px 3px 0 3px;
  position: relative;
  z-index: 8;
  width: 266px;
  min-width: 266px;
  background-color: rgb(178, 178, 178);
  &:nth-child(odd) {
    background-color: rgb(113, 168, 191);
  }
  height: 470px;
  a {
    text-decoration: none;
  }
  transition: all 0.4s ease-in-out;
  &:nth-child(odd):hover {
    background-color: #5d99b2;
  }
  :hover {
    ${"" /* transform: scale(1.01); */}
    -webkit-box-shadow: 0px 0px 15px -8px #000000;
    box-shadow: 0px 0px 15px -8px #000000;
    background-color: #a0a0a0;
  }
  -webkit-animation: fade-in 1s ease-out both;
  animation: fade-in 1s ease-out both;
  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  &:hover .fotka {
    transform: scale(1.03);
  }
  &:hover .ikona {
    transform: rotate(90deg);
  }
  @media only screen and (max-width: 580px) {
    flex-direction: row;
    width: 100vw;
    min-width: 280px;
    height: 235px;
  }
  @media only screen and (max-width: 410px) {
    flex-direction: column;
    width: 99vw;
    min-width: 280px;
    height: 470px;
  }
`
const GornjiDio = styled.div`
  position: relative;
  z-index: 20;
  padding: 27px 27px 0 27px;

  width: 100%;
  height: 235px;
  @media only screen and (max-width: 440px) {
    flex-direction: row;
    width: 100%;
    min-width: 200px;
    height: 235px;
    padding: 20px 17px 15px 17px;
  }
`
const DonjiDio = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 235px;
  overflow: hidden;
  @media only screen and (max-width: 48em) {
    flex-direction: row;
    width: 100%;
    height: 235px;
  }
`
const Objekt = ({ data }) => {
  // ------visibility lazy loading------------

  // --------------------------------------

  return (
    <Layout>
      <SEO
        title={data.wpgraphql.post.title}
        description={data.wpgraphql.post.dodatniOpis.kratkiOpisFront}
      />
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "350px",
          backgroundImage: `url(${Cover})`,
          backgroundPosition: "center",
          backgroundSize: "cover ",
          zIndex: "1",
        }}
      ></div>
      <div
        style={{
          fontWeight: "300",
          fontSize: "28px",
          lineHeight: "34px",
          textAlign: "center",
          marginBottom: "30px",
          marginTop: "90px",
        }}
      >
        Pogledajte i ostale projekte
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($slug: ID!) {
    wpgraphql {
      post(id: $slug, idType: SLUG) {
        dodatniOpis {
          kratkiOpisFront
          foto1 {
            sourceUrl(size: MEDIUM_LARGE)
          }
          foto2 {
            sourceUrl(size: MEDIUM_LARGE)
          }
          foto3 {
            sourceUrl(size: MEDIUM_LARGE)
          }
          foto4 {
            sourceUrl(size: MEDIUM_LARGE)
          }
          foto5 {
            sourceUrl(size: MEDIUM_LARGE)
          }
          foto6 {
            sourceUrl(size: MEDIUM_LARGE)
          }
          kratkiOpisObjektaUNaslovuPosta
          kratkiOpisUPostu1
          kratkiOpisUPostu2
          kratkiOpisUPostu3
          lokacijaObjekta
          frontForografija {
            sourceUrl(size: LARGE)
          }
          naslovMiniPost1
          naslovMiniPost2
          naslovMiniPost3
        }
        title
      }
      posts {
        edges {
          node {
            id
            title
            dodatniOpis {
              kratkiOpisFront
              frontForografija {
                sourceUrl(size: MEDIUM_LARGE)
              }
            }
            categories {
              edges {
                node {
                  name
                }
              }
            }
            slug
          }
        }
      }
    }
  }
`

export default Objekt
