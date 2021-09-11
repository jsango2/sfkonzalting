import React from "react"
import styled from "styled-components"

const OnamaWrap = styled.div`
  width: 80%;
  height: auto;
  min-height: 400px;
  margin: 30px auto 60px auto;
  @media only screen and (max-width: 450px) {
    padding-top: 69px;
  }
`
const WrapKrugova = styled.div`
  display: flex;
  max-width: 900px;
  margin: 0 auto 90px auto;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 450px) {
    margin-bottom: 30px;
  }
`
const Naslov = styled.div`
  width: 100%;
  font-size: 32px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 60px;

  @media only screen and (max-width: 550px) {
    display: none;
  }
`
const Partneri = styled.div`
  width: 90%;
  color: #a4a4a4;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  margin: 0 auto 66px auto;
  line-height: 18px;
  @media only screen and (max-width: 450px) {
    display: none;
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
  margin: 11px;
  @media only screen and (max-width: 450px) {
    height: 130px;
    width: 130px;
    min-width: 120px;
    font-size: 14px;
    line-height: 16.4px;
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

  @media only screen and (max-width: 450px) {
    display: none;
  }
`

const Brojke = () => {
  return (
    <OnamaWrap>
      <Naslov>SF konzalting u brojkama</Naslov>
      <WrapKrugova>
        <div style={{ display: "flex" }}>
          <Krug
            data-sal="fade"
            data-sal="zoom-in"
            data-sal-duration="1300"
            data-sal-easing="ease"
            data-sal-delay="250"
            style={{ backgroundColor: "#d5b8c0" }}
          >
            <div>
              {" "}
              <span style={{ fontWeight: "700" }}>Više od 100 </span> poslovnih
              planova i investicijskih studija
            </div>
          </Krug>
          <Krug
            data-sal="fade"
            data-sal="zoom-in"
            data-sal-duration="1300"
            data-sal-easing="ease"
            data-sal-delay="500"
            style={{ backgroundColor: "#C2DFCE" }}
          >
            {" "}
            <div>
              {" "}
              <span style={{ fontWeight: "700" }}> Više od 40 </span>milijuna
              kuna realiziranih kredita i zajmova
            </div>
          </Krug>
        </div>
        <div style={{ display: "flex" }}>
          <Krug
            data-sal="fade"
            data-sal="zoom-in"
            data-sal-duration="1300"
            data-sal-easing="ease"
            data-sal-delay="750"
            style={{ backgroundColor: "#93CADA" }}
          >
            {" "}
            <div>
              {" "}
              <span style={{ fontWeight: "700" }}>
                Više od 10 milijuna kuna{" "}
              </span>
              bespovratnih sredstava po EU projektima
            </div>
          </Krug>

          <Krug
            data-sal="fade"
            data-sal="zoom-in"
            data-sal-duration="1300"
            data-sal-easing="ease"
            data-sal-delay="1000"
            style={{ backgroundColor: "#7DC1E8" }}
          >
            {" "}
            <div>
              {" "}
              <span style={{ fontWeight: "700" }}>Više od 100 </span>zadovoljnih
              klijenata
            </div>
          </Krug>
        </div>
      </WrapKrugova>
      <Naslov style={{ marginBottom: "30px" }}>
        Klijenti koji su nam ukazali povjerenje
      </Naslov>
      <Partneri>
        Hoteli Božava d.d. • Pakel d.o.o. • U.O. Maestro • Kamen, obrt za
        ugostiteljstvo i poljoprivredu • OPG Mladen Arbanas • OPG Davor Livaić •
        Grafikart d.o.o. • FG-Grafika d.o.o. • Oskar d.o.o. • Evo trade d.o.o.
      </Partneri>
      <Button className="button">
        <a
          style={{ textDecoration: "none", color: "black" }}
          href="mailto: sfkonzalting@gmail.com?subject=Upit"
        >
          ZATRAŽITE KONZULTACIJE
        </a>{" "}
      </Button>
    </OnamaWrap>
  )
}

export default Brojke
