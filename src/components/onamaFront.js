import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import onama from "../../content/assets/images/onama.png"

const OnamaWrap = styled.div`
  display: flex;
  ${"" /* align-items: center;
  justify-content: center; */}
  ${"" /* flex-direction: column; */}
  width: 80%;
  height: 386px;
  margin: 90px auto;
  ${"" /* padding-top: 86px;
  padding-bottom: 86px; */}

  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
  }
`
const Naslov = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 900;
  line-height: 22px;

  width: 210px;
  height: auto;
  margin-top: 15px;

  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
  }
`

const Onama = () => {
  return (
    <OnamaWrap>
      <div
        style={{
          position: "relative",
          width: "50%",
          height: "100%",
          backgroundImage: `url(${onama})`,
          backgroundPosition: "center",
          backgroundSize: "cover ",
          zIndex: "1",
        }}
      ></div>
      <div
        style={{
          position: "relative",
          width: "50%",
          height: "100%",
          backgroundColor: "#F6F6F6",
          zIndex: "1",
          paddingTop: "50px",
          paddingLeft: "65px",
        }}
      >
        <div
          style={{ fontWeight: "300", fontSize: "32px", marginBottom: "20px" }}
        >
          O nama
        </div>
        <div
          style={{
            fontWeight: "300",
            fontSize: "14px",
            lineHeight: "18px",
            width: "377px",
          }}
        >
          Prijateljstvo koje traje duže od 30 godina okrunjeno je poslovnom
          suradnjom baziranoj na profesionalnosti, odgovornosti, te međusobnom
          poštovanju i povjerenju te predstavlja ujedno i kvalitetu koju nudimo
          svim našim klijentima.
          <br />
          <br /> Dugogodišnje iskustvo na menadžerskim pozicijama u financijskim
          i računovodstvenim poslovima, u području EU fondova, uspostavama novih
          odjela, radom u privatnom, neprofitnom, javnom i državnom sektoru je
          temelj garancije našeg znanja koje dijelimo s Vama.
          <div
            style={{
              fontWeight: "700",
              fontSize: "14px",
              textAlign: "end",
              marginTop: "30px",
            }}
          >
            Saznaj više ➞
          </div>
        </div>
      </div>
    </OnamaWrap>
  )
}

export default Onama
