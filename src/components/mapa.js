import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import DonjiDioKontaktMob from "./donjidiokontaktmob"
import MapboxFile from "./mapboxFile"

const MapaWrap = styled.div`
  ${"" /* align-items: center;
  justify-content: center; */}
  ${"" /* flex-direction: column; */}
  position: relative;
  width: 100%;
  height: 450px;

  @media only screen and (max-width: 735) {
    height: auto;
  }
`

const DonjiDio = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 463px;
  background-color: white;
  opacity: 0.9;
  z-index: 2;

  @media only screen and (max-width: 735px) {
    display: none;
  }
`
const KakoDoNas = styled.div`
  position: relative;
  color: black;
  width: 50%;
  height: 100%;
  opacity: 0.9;
  z-index: 3;
  padding-top: 148px;
  text-align: center;
  font-weight: 300;
  @media only screen and (max-width: 735px) {
    width: 100%;
  }
`
const Kontakt = styled.div`
  position: relative;

  ${"" /* display: flex; */}
  width: 50%;
  height: 100%;
  ${"" /* background-color: red; */}
  opacity: 0.9;
  z-index: 3;
  padding-top: 148px;
  text-align: center;
  font-weight: 300;
  color: black;
  @media only screen and (max-width: 735px) {
    width: 100%;
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
    <>
      <MapaWrap>
        <MapboxFile />
      </MapaWrap>
      <DonjiDioKontaktMob />
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
          <div
            style={{
              fontSize: "24px",
              lineHeight: "34.7px",
              marginBottom: "54px",
            }}
          >
            Ive Senjanina 12b, 23000 Zadar
            <br /> Radno vrijeme: Pon/Pet 08–16 h{" "}
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
          <div style={{ fontSize: "24px", marginBottom: "40px" }}>
            +385 91 5234 932
            <br /> sfkonzalting@gmail.com
          </div>
        </Kontakt>
      </DonjiDio>
    </>
  )
}

export default Mapa
