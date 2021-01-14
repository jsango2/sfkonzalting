import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Cover from "../../content/assets/images/coverProjekt.png"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import CMSponosniCard from "../components/cmsponosnicard"

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

const Objekt = ({ data }) => {
  // ------visibility lazy loading------------
  console.log(data)
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
            Primjer naslova u nekoliko redova, maksimalan broj znakova je xyz
            primjer naslova
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
            Nabavka 21 sive mađarske krave, 1 junice limousin pasmine, 1 muško
            june Charloise pasmine koji se nabavljaju kao osnovno sredstvo
            odnosno životinje za rasplod, te 4 ženska i 4 muška teleta križanaca
            mesnih pasmina kao obrtno sredstvo za tov i za prodaju. Nabavka 21
            sive mađarske krave, 1 junice limousin pasmine, 1 muško june
            Charloise pasmine koji se nabavljaju kao osnovno
          </div>
          <div
            style={{
              width: "57px",
              height: "1px",
              backgroundColor: "black",
              marginBottom: "30px",
            }}
          ></div>
          <div
            style={{
              fontWeight: "700",
              fontSize: "14px",
              // width: "89%",
              // marginLeft: "10px",
              marginBottom: "30px",
              lineHeight: "16.8px",
            }}
          >
            KLIJENT: OPG Jadranka Gulam
            <br />
            Institucija koja je odobrila kredit: Hamag bicro
            <br />
            Odobreni iznosi: 141.250,00 kn
          </div>
          <BlueBox>
            <div
              style={{
                fontWeight: "300",
                fontSize: "20px",
                // width: "89%",
                // marginLeft: "10px",
                marginBottom: "22px",
                lineHeight: "24px",
              }}
            >
              Uloga SF konzaltinga u projektu:
            </div>
            <div
              style={{
                fontWeight: "300",
                fontSize: "14px",
                // width: "89%",
                // marginLeft: "10px",
                // marginBottom: "22px",
                lineHeight: "18px",
              }}
            >
              Nabavka 21 sive mađarske krave, 1 junice limousin pasmine, 1 muško
              june Charloise pasmine koji se nabavljaju kao osnovn. Nabavka 21
              sive mađarske krave, 1 junice limousin pasmine, 1 muško june
              Charloise pasmine koji se nabavljaju kao osnovn <br />
              <br /> Nabavka 21 sive mađarske krave, 1 junice limousin pasmine,
              1 muško june Charloise pasmine koji se nabavljaju kao
              osnovnNabavka 21 sive mađarske krave, 1 junice limousin pasmine, 1
              muško june Charloise pasmine koji se nabavljaju kao osnovn
            </div>
          </BlueBox>
        </Lijevo>
        <Desno>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "421px",
              marginBottom: "83px",
              backgroundImage: `url(${Cover})`,
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
        <Naslov>Pogledajte i naše ostale projekte</Naslov>
        <div
          style={{
            display: "flex",
            width: "768px",
            justifyContent: "space-between",
            margin: "0 auto 40px auto",
          }}
        >
          <CMSponosniCard />
          <CMSponosniCard />
          <CMSponosniCard />
        </div>
      </WrapDoli>
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
