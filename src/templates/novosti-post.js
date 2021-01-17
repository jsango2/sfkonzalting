import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Cover from "../../content/assets/images/coverProjekt.png"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import CMSponosniCard from "../components/cmsponosnicard"
import CMSnovostiCarousel from "../components/cmscarouselnovosti"

const Wrap = styled.div`
  margin: 0 auto;
  display: flex;
  position: relative;
  width: 85%;
  justify-content: space-between;
  height: 800px;
`
const BlueBox = styled.div`
  ${"" /* margin: 0 auto;
  display: flex; */}
  position: relative;
  width: 100%;
  justify-content: space-between;
  height: 280px;
  padding-top: 35px;
  padding-right: 35px;
  padding-left: 37px;
  color: white;
  background: linear-gradient(
    114.13deg,
    #6c84c1 14.71%,
    #6a94cc 32.16%,
    #67aee0 53%,
    #63c6f1 69.93%,
    #75d5e4 97.04%
  );
`
const Lijevo = styled.div`
  ${"" /* margin: 0 auto; */}
  width: 47%;
  padding-top: 53px;
  ${"" /* padding: 1.85rem 0; */}
  height: 100%;
  background-color: white;
  ${"" /* display: flex;
  justify-content: space-between; */}
  ${
    "" /* @media only screen and (max-width: 60em) {
    display: block;
    padding: 0 0;
  } */
  }
`
const Desno = styled.div`
  ${"" /* margin: 0 auto; */}
  width: 47%;
  ${"" /* padding: 1.85rem 0; */}
  height: 100%;
  padding-top: 53px;
  ${"" /* display: flex;
  justify-content: space-between; */}
  ${
    "" /* @media only screen and (max-width: 60em) {
    display: block;
    padding: 0 0;
  } */
  }
`
const Button = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: transparent;
  z-index: 2;
  border: 1px solid #393939;
  width: 100%;
  height: 46px;
  color: #393939;
  font-weight: 300;
  font-size: 22px;
  text-decoration: none;
  ${"" /* margin: 0 auto 0 130px; */}
  ${
    "" /* @media only screen and (max-width: 1000px) {
    marginleft: 108px;
  }
  @media only screen and (max-width: 768px) {
    margin-bottom: 54px;
    margin-left: 15%;
  }
  @media only screen and (max-width: 420px) {

  } */
  }
`
const WrapDoli = styled.div`
  ${
    "" /* display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; */
  }
  width: 100%;
  height: 550px;
  padding-top: 50px;
  padding-bottom: 86px;
  background: rgba(196, 196, 196, 0.1);
  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
  }
`
const Naslov = styled.div`
  font-size: 32px;
  width: 100%;
  height: auto;
  text-align: center;
  margin-bottom: 50px;

  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
  }
`
const Overlay = styled.div`
  position: absolute;
  z-index: 500;
  opacity: 0.2;
  height: 100%;
  width: 100%;
  ${"" /* max-width: 1280px; */}
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

const Objekt = ({ data }) => {
  // ------visibility lazy loading------------
  // --------------------------------------

  return (
    <Layout>
      <SEO
        title={data.wpgraphql.wp_novost.title}
        description={data.wpgraphql.wp_novost.wp_gq_novost.tekstNovosti}
      />
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "230px",
          backgroundImage: `url(${data.wpgraphql.wp_novost.wp_gq_novost.istaknutaFotografija.sourceUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover ",
          zIndex: "1",
        }}
      >
        <Overlay />
      </div>
      <Wrap>
        <Lijevo>
          <div
            style={{
              fontWeight: "300",
              fontSize: "32px",
              // width: "89%",
              // marginLeft: "10px",
              marginBottom: "50px",
              lineHeight: "37.5px",
            }}
          >
            {data.wpgraphql.wp_novost.title}
          </div>
          <div
            style={{
              fontWeight: "300",
              fontSize: "14px",
              // width: "89%",
              // marginLeft: "10px",
              marginBottom: "30px",
              lineHeight: "18px",
            }}
          >
            {data.wpgraphql.wp_novost.wp_gq_novost.tekstNovosti}
          </div>
        </Lijevo>
        <Desno>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "421px",
              marginBottom: "83px",
              backgroundImage: `url(${data.wpgraphql.wp_novost.wp_gq_novost.sirokaFotografijaUPostu.sourceUrl})`,
              backgroundPosition: "center",
              backgroundSize: "cover ",
              zIndex: "1",
            }}
          ></div>
          <Link to="/uslugePage" style={{ textDecoration: "none" }}>
            <Button>POŠALJITE UPIT</Button>
          </Link>
        </Desno>
      </Wrap>
      <WrapDoli>
        {/* <Naslov>Pogledajte i naše ostale projekte</Naslov> */}
        <div
        //   style={{
        //     display: "flex",
        //     width: "768px",
        //     justifyContent: "space-between",
        //     margin: "0 auto 40px auto",
        //   }}
        >
          <CMSnovostiCarousel />
        </div>
      </WrapDoli>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery2($slug: ID!) {
    wpgraphql {
      wp_novost(id: $slug, idType: SLUG) {
        title
        date
        wp_gq_novost {
          sirokaFotografijaUPostu {
            sourceUrl
          }
          istaknutaFotografija {
            sourceUrl
          }
          tekstNovosti
        }
      }
    }
  }
`

export default Objekt
