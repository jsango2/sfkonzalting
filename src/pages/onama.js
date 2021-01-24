import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import onama from "../../content/assets/images/onama.png"
import ZeljkaPdf from "../../content/assets/images/CV_Zeljka_Smoljan.pdf"
import JelenaPdf from "../../content/assets/images/CV_Jelena_Ferrelli.pdf"

import Layout from "../components/layout"
import SEO from "../components/seo"
import OnamaTriProjekta from "./../components/onamatriprojekta"

const WrapUp = styled.div`
  margin: 0 auto;
  width: 85%;
  margin-top: 60px;
  margin-bottom: 60px;
  ${"" /* padding: 1.85rem 0; */}
  min-height: 534px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 575px) {
    margin-top: 30px;
    flex-direction: column-reverse;
  }
`
const Lijevo = styled.div`
  ${"" /* margin: 0 auto; */}
  width: 48%;
  ${"" /* padding: 1.85rem 0; */}
  height: 100%;
  background-color: white;
  @media only screen and (max-width: 575px) {
    width: 100%;
  }
`
const Desno = styled.div`
  ${"" /* margin: 0 auto; */}
  width: 48%;
  ${"" /* padding: 1.85rem 0; */}
  height: 100%;
  background-color: white;

  @media only screen and (max-width: 575px) {
    width: 100%;
  }
`
const FotoWrap = styled.div`
  height: 534px;

  @media only screen and (max-width: 575px) {
    height: 320px;
  }
`
const Blok1 = styled.div`
  position: relative;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  min-height: 162px;
  font-weight: 300;
  font-size: 32px;
  line-height: 37px;
  color: white;
  padding: 25px 40px;
  background: linear-gradient(
    120.27deg,
    #6a94cc -55.59%,
    #63c6f1 -16.04%,
    #95d2dc 15.72%,
    #afdecb 38.54%,
    #b8dbbe 65.49%,
    #eba8c1 126.4%
  );
  transform: rotate(180deg);
  ${"" /* z-index: 1; */}
  ${"" /* @media only screen and (max-width: 48em) {
    height: 495px;
  } */}
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

const OnamaPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="O nama" />
      {/* -----------flex sa textom i slikom */}
      <WrapUp>
        <Lijevo>
          <Blok1>
            <div
              style={{
                position: "relative",
                transform: "rotate(180deg)",
                width: "373px",
              }}
            >
              Dugogodišnje prijateljstvo i iskustvo pretvoreno u partnerstvo
            </div>
          </Blok1>
          <div
            style={{
              fontWeight: "400",
              fontSize: "14px",
              width: "89%",
              marginLeft: "10px",
              marginTop: "29px",
              lineHeight: "18px",
            }}
          >
            Prijateljstvo koje traje duže od 30 godina okrunjeno je poslovnom
            suradnjom baziranoj na profesionalnosti, odgovornosti, te međusobnom
            poštovanju i povjerenju te predstavlja ujedno i kvalitetu koju
            nudimo svim našim klijentima.
            <br />
            <br /> Dugogodišnje iskustvo na menadžerskim pozicijama u
            financijskim i računovodstvenim poslovima, u području EU fondova,
            uspostavama novih odjela, radom u privatnom, neprofitnom, javnom i
            državnom sektoru je temelj garancije našeg znanja koje dijelimo s
            Vama.
          </div>
          <div
            style={{
              fontWeight: "700",
              fontSize: "14px",
              width: "89%",
              marginLeft: "10px",
              marginTop: "40px",
              lineHeight: "18px",
            }}
          >
            <a style={{ textDecoration: "none" }} href={JelenaPdf} download>
              JELENA FERRELLI | PDF ŽIVOTOPIS
            </a>
          </div>
          <div
            style={{
              fontWeight: "700",
              fontSize: "14px",
              width: "89%",
              margin: "18px 0 43px 10px",

              lineHeight: "18px",
            }}
          >
            <a style={{ textDecoration: "none" }} href={ZeljkaPdf} download>
              ŽELJKA SMOLJAN | PDF ŽIVOTOPIS
            </a>
          </div>
          <Link to="/uslugePage" style={{ textDecoration: "none" }}>
            <Button className="button">POŠALJITE UPIT</Button>
          </Link>
        </Lijevo>
        <Desno>
          <FotoWrap>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                backgroundImage: `url(${onama})`,
                backgroundPosition: "center",
                backgroundSize: "cover ",
                zIndex: "1",
              }}
            ></div>
          </FotoWrap>
        </Desno>
      </WrapUp>
      <OnamaTriProjekta />

      {/* ------------tri projekta na koje smo ponosni */}
    </Layout>
  )
}

export default OnamaPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
