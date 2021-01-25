import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import NovostiSve from "../components/novostiSve"
import Header from "../components/header"
import Footer from "../components/footer"

// const Wrap = styled.div`
//   display: flex;
//   ${"" /* ${"" /* align-items: center; */} */}
//   flex-wrap: wrap;
//   justify-content: space-between;
//   margin: 60px auto 85px auto;

//   ${"" /* padding-left: 17px; */}
//   ${"" /* padding-bottom: 86px;  */}
//   width: 1020px;
//   @media only screen and (max-width: 60em) {
//     ${"" /* display: block;
//     padding: 0 0; */}
//   }
// `
const HeroWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: white;
  ${"" /* max-width: 1280px; */}
  height: 222px;
  transform: rotate(-180deg);
  background: linear-gradient(
    114.13deg,
    #ac84bc -0.34%,
    #a684bc 2.01%,
    #9382bc 5.66%,
    #747fbd 10.15%,
    #6c7ebd 11.12%,
    #6c84c1 14.71%,
    #6a94cc 20.82%,
    #67aee0 28.65%,
    #63c6f1 34.49%,
    #95d2dc 49.73%,
    #b7dece 64.66%,
    #c3e3c8 73.15%,
    #eba8c1 96.4%,
    #bc9fba 101.81%,
    #9799b5 106.72%,
    #8095b2 110.55%,
    #7794b1 112.81%
  );
  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
  }
`

const Novosti = ({ data }) => {
  return (
    <>
      <Header />
      <SEO title="Novosti" />
      <HeroWrap>
        <div style={{ transform: "rotate(180deg)" }}>
          <div
            style={{
              fontSize: "32px",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Novosti / Objavljeni natječaji
          </div>
          <div
            style={{
              fontSize: "14px",
              lineHeight: "18px",
              textAlign: "center",
            }}
          >
            Vijesti o EU i nacionalnim natječajima te ostale <br />
            zanimljivosti
          </div>
        </div>
      </HeroWrap>
      <NovostiSve posts={data} />
      <Footer />
    </>
  )
}

export const query = graphql`
  query MyQuery3 {
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
`

export default Novosti
