import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"

const OnamaWrap = styled.div`
  ${"" /* align-items: center;
  justify-content: center; */}
  ${"" /* flex-direction: column; */}
  width: 80%;
  height: auto;
  margin: 90px auto 60px auto;
  ${"" /* padding-top: 86px;
  padding-bottom: 86px; */}

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
const Krug = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 190px;
  width: 190px;
  min-width: 190px;
  color: white;
  font-size: 18px;
  line-height: 21.9px;
  font-weight: 300;
  border-radius: 50%;
  padding: 20px;
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

const Brojke = () => {
  return (
    <OnamaWrap>
      <Naslov>SF konzalting u brojkama</Naslov>
      <div
        style={{
          display: "flex",
          width: "87%",
          margin: "0 auto 90px auto",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Krug style={{ backgroundColor: "#d5b8c0" }}>
          <div>
            {" "}
            <span style={{ fontWeight: "700" }}>Više od 60 </span> poslovnih
            planova i investicijskih studija
          </div>
        </Krug>
        <Krug style={{ backgroundColor: "#C2DFCE" }}>
          {" "}
          <div>
            {" "}
            <span style={{ fontWeight: "700" }}>Više od 60 </span> poslovnih
            planova i investicijskih studija
          </div>
        </Krug>
        <Krug style={{ backgroundColor: "#93CADA" }}>
          {" "}
          <div>
            {" "}
            <span style={{ fontWeight: "700" }}>Više od 60 </span> poslovnih
            planova i investicijskih studija
          </div>
        </Krug>
        <Krug style={{ backgroundColor: "#7DC1E8" }}>
          {" "}
          <div>
            {" "}
            <span style={{ fontWeight: "700" }}>Više od 60 </span> poslovnih
            planova i investicijskih studija
          </div>
        </Krug>
      </div>
      <Naslov>Klijenti koji su nam ukazali povjerenje</Naslov>
      <Partneri>
        Hoteli Božava d.d. • Pakel d.o.o. • U.O. Maestro • Kamen, obrt za
        ugostiteljstvo i poljoprivredu • OPG Mladen Arbanas • OPG Davor Livaić •
        Grafikart d.o.o. • FG-Grafika d.o.o. • Oskar d.o.o. • Evo trade d.o.o.
      </Partneri>
      <Link to="/usluge" style={{ textDecoration: "none" }}>
        <Button>ZATRAŽITE KONZULTACIJE</Button>
      </Link>
    </OnamaWrap>
  )
}

export default Brojke
