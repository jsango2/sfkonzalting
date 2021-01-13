import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import mapa from "../../content/assets/images/Karta.png"
import MapboxFile from "./mapboxFile"

const MapaWrap = styled.div`
  ${"" /* align-items: center;
  justify-content: center; */}
  ${"" /* flex-direction: column; */}
  position: relative;
  width: 100%;
  height: 923px;

  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
  }
`
const Naslov = styled.div`
  width: 100%;
  font-size: 32px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 60px;

  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
  }
`
const Partneri = styled.div`
  width: 90%;
  color: #a4a4a4;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  margin: 0 auto 60px auto;
  line-height: 18px;
  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
  }
`
const DonjiDio = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 50%;
  background-color: white;
  opacity: 0.9;
  z-index: 2;

  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
  }
`
const KakoDoNas = styled.div`
  position: absolute;
  bottom: 0;
  ${"" /* display: flex; */}
  width: 50%;
  height: 100%;
  opacity: 0.9;
  z-index: 3;
  padding-top: 119px;
  text-align: center;
  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
  }
`
const Kontakt = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  ${"" /* display: flex; */}
  width: 50%;
  height: 100%;
  ${"" /* background-color: red; */}
  opacity: 0.9;
  z-index: 3;
  padding-top: 119px;
  text-align: center;
  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
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
  width: 353px;
  height: 46px;
  color: #393939;
  font-weight: 300;
  font-size: 22px;
  text-decoration: none;
  margin: 0 auto;
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

const Mapa = () => {
  return (
    <MapaWrap>
      {/* <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${mapa})`,
          backgroundPosition: "center",
          backgroundSize: "cover ",
          zIndex: "1",
        }}
      /> */}
      <MapboxFile />
      <DonjiDio>
        <KakoDoNas>
          <div style={{ fontSize: "32px", marginBottom: "29px" }}>
            Kako do nas
          </div>
          <div
            style={{
              width: "57px",
              height: "1px",
              backgroundColor: "black",
              margin: "0 auto 29px auto",
            }}
          ></div>
          <div style={{ fontSize: "32px", marginBottom: "54px" }}>
            Ive Senjanina 12b,
            <br /> 23000 Zadar
          </div>
          <div style={{ fontSize: "18px" }}>
            Radno vrijeme: Pon/Pet 08–16 h{" "}
          </div>
        </KakoDoNas>
        <Kontakt>
          <div style={{ fontSize: "32px", marginBottom: "29px" }}>Kontakt</div>
          <div
            style={{
              width: "57px",
              height: "1px",
              backgroundColor: "black",
              margin: "0 auto 29px auto",
            }}
          ></div>
          <div style={{ fontSize: "32px", marginBottom: "40px" }}>
            +385 91 5234 932
            <br /> sfkonzalting@gmail.com
          </div>
          <Link to="/usluge" style={{ textDecoration: "none" }}>
            <Button>PRETPLATI SE NA NEWSLETTER</Button>
          </Link>
        </Kontakt>
      </DonjiDio>
    </MapaWrap>
  )
}

export default Mapa
