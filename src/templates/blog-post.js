import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"
import CMSizdvojeniProjekti from "./../components/cmsizdvojeniprojekti"
import Header from "../components/header"
import Footer from "../components/footer"

const Wrap = styled.div`
  margin: 0 auto;
  display: flex;
  position: relative;
  width: 80%;
  justify-content: space-between;
  height: auto;
  padding-bottom: 60px;
  @media only screen and (max-width: 570px) {
    flex-direction: column;
    height: auto;
    width: 100%;
    padding-left: 30px;
  }
`
const BlueBox = styled.div`
  position: relative;
  width: 100%;
  justify-content: space-between;
  height: auto;
  padding-top: 35px;
  padding-right: 35px;
  padding-left: 37px;
  padding-bottom: 35px;
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
  width: 47%;
  padding-top: 53px;
  height: 100%;
  background-color: white;

  @media only screen and (max-width: 570px) {
    width: 95%;
  }
`
const Desno = styled.div`
  width: 47%;
  height: 100%;
  padding-top: 53px;

  @media only screen and (max-width: 570px) {
    width: 95%;
  }
`
const Photo = styled.div`
  @media only screen and (max-width: 570px) {
    display: none;
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
`
const WrapDoli = styled.div`
  width: 100%;
  height: 600px;
  padding-top: 50px;
  padding-bottom: 86px;
  background: rgba(196, 196, 196, 0.1);
  @media only screen and (max-width: 570px) {
    margin-top: 78px;
  }
`
const Naslov = styled.div`
  font-size: 32px;
  width: 90%;
  height: auto;
  text-align: center;
  margin: 0 auto 50px auto;

  @media only screen and (max-width: 60em) {
  }
`

const Objekt = ({ data }) => {
  // ------visibility lazy loading------------
  // --------------------------------------

  return (
    <>
      <Header />
      <SEO
        title={data.wpgraphql.wp_projekt.title}
        description={data.wpgraphql.wp_projekt.wp_gr_projekt.uvodUProjekt}
      />
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "350px",
          backgroundImage: `url(${data.wpgraphql.wp_projekt.wp_gr_projekt.sirokaFotografijaUPostu.sourceUrl})`,
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
            {data.wpgraphql.wp_projekt.title}
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
            {data.wpgraphql.wp_projekt.wp_gr_projekt.uvodUProjekt}
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
            dangerouslySetInnerHTML={{
              __html:
                data.wpgraphql.wp_projekt.wp_gr_projekt.klijentiznosinstitucija,
            }}
          ></div>
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
              dangerouslySetInnerHTML={{
                __html:
                  data.wpgraphql.wp_projekt.wp_gr_projekt
                    .ulogaSfKonzaltingaUProjektu,
              }}
            ></div>
          </BlueBox>
        </Lijevo>
        <Desno>
          <Photo
            style={{
              position: "relative",
              width: "100%",
              height: "421px",
              marginBottom: "83px",
              backgroundImage: `url(${data.wpgraphql.wp_projekt.wp_gr_projekt.istaknutaSlika.sourceUrl})`,
              backgroundPosition: "center",
              backgroundSize: "cover ",
              zIndex: "1",
            }}
          ></Photo>
          <Button className="button">
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="mailto: sfkonzalting@gmail.com?subject=Upit"
            >
              POŠALJITE UPIT
            </a>{" "}
          </Button>
        </Desno>
      </Wrap>
      <WrapDoli>
        <Naslov>Pogledajte i naše ostale projekte</Naslov>

        <div>
          <CMSizdvojeniProjekti />
        </div>
      </WrapDoli>
      <Footer />
    </>
  )
}

export const query = graphql`
  query MyQuery($slug: ID!) {
    wpgraphql {
      wp_projekt(id: $slug, idType: SLUG) {
        title
        date
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
`

export default Objekt
