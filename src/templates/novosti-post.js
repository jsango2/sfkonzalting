import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"
import CMSnovostiCarousel from "../components/cmscarouselnovosti"
import Header from "../components/header"
import Footer from "../components/footer"

const Wrap = styled.div`
  margin: 0 auto;
  display: flex;
  position: relative;
  width: 80%;
  justify-content: space-between;
  height: auto;
  padding-bottom: 70px;
  @media only screen and (max-width: 1100px) {
    ${"" /* width: 940px;
    padding-left: 30px; */}
  }
  @media only screen and (max-width: 780px) {
    height: auto;
    width: 620px;
  }

  @media only screen and (max-width: 570px) {
    flex-direction: column;
    width: 100%;
    padding-left: 25px;
    padding-bottom: 0px;
  }
`

const Lijevo = styled.div`
  ${"" /* margin: 0 auto; */}
  width: 47%;
  padding-top: 60px;
  ${"" /* padding: 1.85rem 0; */}
  height: 100%;
  background-color: white;
  ${"" /* display: flex;
  justify-content: space-between; */}

  @media only screen and (max-width: 570px) {
    width: 95%;
  }
`
const Desno = styled.div`
  ${"" /* margin: 0 auto; */}
  width: 47%;
  ${"" /* padding: 1.85rem 0; */}
  height: 100%;
  padding-top: 60px;
  ${"" /* display: flex;
  justify-content: space-between; */}
  @media only screen and (max-width: 570px) {
    padding-top: 30px;
    width: 95%;
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
  @media only screen and (max-width: 570px) {
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
  @media only screen and (max-width: 570px) {
    margin-top: 78px;
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
  const [datum, setDatum] = useState("-")
  useEffect(() => {
    let datumPosta = data.wpgraphql.wp_novost.date
    function formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear()

      if (month.length < 2) month = "0" + month
      if (day.length < 2) day = "0" + day

      return [day, month, year].join(".")
    }
    setDatum(formatDate(datumPosta))
  }, [data.wpgraphql.wp_novost.date])

  // ------visibility lazy loading------------
  // --------------------------------------

  return (
    <>
      <Header />
      <SEO
        title={data.wpgraphql.wp_novost.title}
        description={data.wpgraphql.wp_novost.wp_gq_novost.title}
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
              marginBottom: "10px",
              lineHeight: "37.5px",
            }}
          >
            {data.wpgraphql.wp_novost.title}
          </div>
          <div
            style={{
              fontWeight: "400",
              color: "#A0A0A0",
              fontSize: "12px",
              lineHeight: "17.5px",
              marginBottom: "25px",
            }}
          >
            NOVOSTI / {datum}
          </div>
          <div
            style={{
              fontWeight: "400",
              fontSize: "14px",
              // width: "89%",
              // marginLeft: "10px",
              marginBottom: "30px",
              lineHeight: "18px",
            }}
            dangerouslySetInnerHTML={{
              __html: data.wpgraphql.wp_novost.wp_gq_novost.tekstNovosti,
            }}
          ></div>
        </Lijevo>
        <Desno>
          <div
            className="photoNovosti"
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
      <Footer />
    </>
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
