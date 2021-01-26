import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const Wrap = styled.div`
  display: flex;
  ${"" /* align-items: center;
  justify-content: center;  */}
  position: relative;
  width: 86%;
  height: auto;
  margin: 0 auto 0 auto;
  padding-bottom: 30px;
  @media only screen and (max-width: 550px) {
    width: 100%;
    margin-top: 40px;
    flex-direction: column;
  }
`
const StupacLijevo = styled.div`
  ${"" /* display: flex; */}
  ${"" /* align-items: center;
  justify-content: center;  */}
  position: relative;
  width: 46%;
  height: auto;
  margin: 0 auto;
  ${"" /* z-index: 1; */}
  @media only screen and (max-width: 550px) {
    width: 100%;
  }
`

const BlokTekst = styled.div`
  position: relative;

  transform: rotate(180deg);
  width: 373px;
  ${"" /* @media only screen and (max-width: 48em) {
    height: 495px;
  } */}
`
const StupacDesno = styled.div`
  ${"" /* display: flex; */}
  ${"" /* align-items: center;
  justify-content: center;  */}
  position: relative;
  width: 46%;
  height: auto;
  margin: 0 auto;

  @media only screen and (max-width: 550px) {
    width: 100%;
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
  min-height: 159px;
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
const Blok2 = styled.div`
  position: relative;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  min-height: 128px;
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

  @media only screen and (max-width: 550px) {
    margin: 0 auto 40px auto;
    width: 90%;
  }
`

const UslugeText = () => {
  return (
    <Wrap>
      <StupacLijevo>
        <Blok1>
          <BlokTekst>
            Izrada poslovnih planova, investicijskih studija i cost benefit
            analiza
          </BlokTekst>
        </Blok1>
        <div className="paragrafUsluge bold">
          Pružamo usluge savjetovanja i pronalaska najbolje opcije financiranja
          te izradu poslovnih planova, investicijskih studija, CBA analiza i
          ostale cjelokupne popratne dokumentacije.
        </div>
        <div className="paragrafUsluge">
          Izrada poslovnog plana ili investicijske studije kod HAMAG BICRO,
          HBOR-a, poslovnih banaka te ostalih investitora je jedan od osnovnih
          preduvjeta ostvarivanja kredita banke ili dobivanja bespovratnih
          sredstava, koji se prilaže uz zahtjevnu popratnu dokumentaciju.
          <br />
          <br /> U svrhu pokretanja ili razvoja poslovanja poduzetnika, obrtnika
          i obiteljskih poljoprivrednih gospodarstava, te ostvarenja kreditnih
          sredstava, do sada smo izradili smo preko 60 poslovnih planova i
          investicijskih studija čime smo poduzetnicima omogućili:
        </div>
        <div className="paragrafUsluge uvuceno">
          - kupnju i opremanje poslovnih prostora,
          <br /> - izgradnju ili adaptaciju proizvodno-poslovnih prostora,
          <br /> - nabavku mehanizacije, strojeva i opreme,
          <br /> - kupnju životinja,
          <br /> - ulaganje u marketing i promidžbu,
          <br /> - ulaganje u turističke djelatnosti (gradnja ili uređenje
          smještajnih kapaciteta, kupnja hotela),
          <br /> - izradu projektno-tehničke dokumentacije za izgradnju poslovne
          infrastrukture i legalizaciju poslovnih objekata,
          <br /> - restrukturiranje poslovanja - mnoštvo ostalih aktivnosti.
        </div>
        <div className="paragrafUsluge marginBottom">
          U dinamičnom okruženju te novim izazovima na tržištu s kojima se
          svakodnevno susrećemo, osim tradicionalnih alata, prepoznali smo
          potrebu tržišta te prilagodili svoje poslovanje online izradi
          poslovnih planova i investicijskih studija.
        </div>
      </StupacLijevo>
      <StupacDesno>
        <Blok2>
          <BlokTekst>Izrada EU i nacionalnih projekata</BlokTekst>
        </Blok2>
        <div className="paragrafUsluge marginBottom">
          Sudjelujemo u razvoju projektne ideje te sudjelujemo u pripremi i
          provedbi projekata .
          <br />
          <br />
          Posjedujemo veliko iskustvo u izradi EU i nacionalnih projekata,
          posebno vezano za izradu projekata u okviru Kohezijskog fonda,
          Europskog fonda za regionalni razvoj, Europskog socijalnog fonda,
          Europskog poljoprivrednog fonda za ruralni razvoj i Europskog fonda za
          pomorstvo i ribarstvo te nudimo usluge pronalaženja natječaja sukladno
          Vašim potrebama i idejama, pripremu natječajne dokumentacije te
          provedbu projekata.
        </div>
        <Blok2>
          {" "}
          <BlokTekst>Poslovno savjetovanje i izobrazba</BlokTekst>
        </Blok2>
        <div className="paragrafUsluge marginBottom">
          Usmjeravamo poduzetnike prilikom širenja poslovanja, investiranja,
          optimizacije poslovnih procesa. Pružamo usluge poslovnog savjetovanja
          i izobrazbe vezano za poslovanje (širenje poslovanja, pokretanje
          investicija, optimizacije poslovnih procesa), mogućnosti kreditiranja,
          EU fondove i projekte.
        </div>
        <Link to="/uslugePage" style={{ textDecoration: "none" }}>
          <Button className="button">POŠALJITE UPIT</Button>
        </Link>
      </StupacDesno>
    </Wrap>
  )
}

export default UslugeText
