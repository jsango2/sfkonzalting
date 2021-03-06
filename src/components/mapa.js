import React, { useRef } from "react"
import Loader from "react-loader-spinner"

import styled from "styled-components"
import DonjiDioKontaktMob from "./donjidiokontaktmob"
import MapboxFile from "./mapboxFile"
import { useHasBeenVisible } from "./../components/useVisibility"

const MapaWrap = styled.div`
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

  width: 50%;
  height: 100%;
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

const Mapa = () => {
  const halfPage = useRef()
  const preload = useRef()
  const hasScrolled = useHasBeenVisible(halfPage)
  const isScrolling = useHasBeenVisible(preload)
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "1800px",
          height: "200px",
          width: "100%",
        }}
        ref={preload}
      ></div>
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
        }}
        ref={halfPage}
      ></div>
      {hasScrolled || isScrolling ? (
        <MapaWrap>
          <div className="mapaPozadina">Mapa se učitava...</div>
          <MapboxFile />
        </MapaWrap>
      ) : (
        <div
          style={{
            minHeight: "316px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Loader type="Rings" color="#71A8BF" height={100} width={100} />
        </div>
      )}

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
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="tel: +385 (0) 91 5234 932"
            >
              +385 91 5234 932
            </a>

            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="tel: +385 (0) 95 900 7687"
            >
              +385 95 900 7687
            </a>

            <br />
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="mailto: info@sfkonzalting.hr?subject=Upit"
            >
              info@sfkonzalting.hr
            </a>
          </div>
        </Kontakt>
      </DonjiDio>
    </>
  )
}

export default Mapa
