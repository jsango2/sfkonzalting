import React from "react"
import styled from "styled-components"
import onama from "../../content/assets/images/onama.jpg"
import { Link } from "gatsby"

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${"" /* flex-direction: column; */}
  width: 1230px;
  margin: 0 auto;
  height: auto;
  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
`
const OnamaWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${"" /* flex-direction: column; */}
  width: 1040px;
  height: auto;
  min-height: 386px;
  margin: 30px auto 90px auto;
  ${"" /* padding-top: 86px;
  padding-bottom: 86px; */}
  @media only screen and (max-width: 950px) {
    width: 100%;
  }
  @media only screen and (max-width: 727px) {
    flex-direction: column;
    height: 750px;
    margin-bottom: 30px;
  }
`
const Slika = styled.div`
  position: relative;
  width: 50%;

  height: 386px;
  background-image: url(${onama});
  background-position: center;
  background-size: cover;
  z-index: 1;
  @media only screen and (max-width: 950px) {
    height: 430px;
  }
  @media only screen and (max-width: 880px) {
    min-height: 490px;
  }
  @media only screen and (max-width: 727px) {
    width: 100%;
  }
`
const Text = styled.div`
  position: relative;
  width: 50%;

  height: 386px;
  background-color: #f6f6f6;
  padding-top: 50px;
  padding-left: 65px;
  padding-right: 65px;
  padding-bottom: 30px;
  z-index: 1;
  @media only screen and (max-width: 950px) {
    height: 430px;
  }
  @media only screen and (max-width: 880px) {
    height: 490px;
  }
  @media only screen and (max-width: 727px) {
    height: auto;
    width: 100%;
    min-width: 340px;
    padding: 30px;
    margin-bottom: 30px;
  }
`
const Paragraf = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  width: 100%;

  @media only screen and (max-width: 570px) {
    width: 100%;
    text-align: center;
  }
`
const Naslov = styled.div`
  font-weight: 300;
  font-size: 32px;
  margin-bottom: 20px;

  @media only screen and (max-width: 570px) {
    text-align: center;
  }
`

const Onama = () => {
  return (
    <Wrap>
      <OnamaWrap>
        <Slika />
        <Text>
          <Naslov>O nama</Naslov>
          <Paragraf>
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
            <div className="removeUnderline2">
              <Link className="saznajVise" to="/onama">
                Saznaj više ➞
              </Link>
            </div>
          </Paragraf>
        </Text>
      </OnamaWrap>
    </Wrap>
  )
}

export default Onama
