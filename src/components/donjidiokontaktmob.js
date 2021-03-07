import React from "react"
import styled from "styled-components"
import instagram from "../../content/assets/images/instagram_icon.svg"
import facebook from "../../content/assets/images/facebook_icon.svg"
import linkedin from "../../content/assets/images/linkedin_icon.svg"

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 588px;

  @media only screen and (min-width: 735px) {
    display: none;
  }
`
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    114.13deg,
    #6c84c1 14.71%,
    #6a94cc 32.16%,
    #67aee0 53%,
    #63c6f1 69.93%,
    #75d5e4 97.04%
  );
  opacity: 0.8;
  transform: rotate(-180deg);
`
const KakoDoNas = styled.div`
  position: relative;
  color: white;
  width: 50%;
  height: 80%;
  opacity: 1;
  z-index: 3;
  padding-top: 90px;
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
  opacity: 1;
  z-index: 3;
  text-align: center;
  font-weight: 300;
  color: white;
  @media only screen and (max-width: 735px) {
    width: 100%;
  }
`
const SocMrezeMob = styled.div`
  position: relative;
  bottom: 135px;
  z-index: 5;
  @media only screen and (min-width: 850px) {
    ${"" /* display: none; */}
  }
`

const DonjiDioKontaktMob = () => {
  return (
    <Wrap>
      <Background />

      <KakoDoNas>
        <div style={{ fontSize: "32px", marginBottom: "20px" }}>
          Kako do nas
        </div>
        <div
          style={{
            width: "57px",
            height: "1px",
            backgroundColor: "white",
            margin: "0 auto 27px auto",
          }}
        ></div>
        <div
          style={{
            fontSize: "12px",
            lineHeight: "18px",
          }}
        >
          Ive Senjanina 12b, 23000 Zadar
          <br /> Radno vrijeme: Pon/Pet 08–16 h{" "}
        </div>
      </KakoDoNas>
      <Kontakt>
        <div style={{ fontSize: "32px", marginBottom: "20px" }}>Kontakt</div>
        <div
          style={{
            width: "57px",
            height: "1px",
            backgroundColor: "white",
            margin: "0 auto 27px auto",
          }}
        ></div>
        <div style={{ fontSize: "12px", marginBottom: "18px" }}>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="tel: +385 (0) 91 5234 932"
          >
            +385 91 5234 932
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="tel: +385 (0) 95 900 7687"
          >
            +385 95 900 7687
          </a>
          <br /> info@sfkonzalting.hr
        </div>
      </Kontakt>
      <SocMrezeMob>
        <a href="https://www.instagram.com/sfkonzalting/">
          <img
            className="footerLogo insta mob"
            src={instagram}
            alt="instagram"
            width="40px"
          />
        </a>
        <a href="https://web.facebook.com/SF-Konzalting-432018117547648/services/?service_id=2385723278127719&_rdc=1&_rdr">
          <img
            className="footerLogo fb mob"
            src={facebook}
            alt="facebook"
            width="40px"
          />
        </a>
        <a href="https://www.linkedin.com/in/sf-konzalting-business-consulting-services-35618a187/?originalSubdomain=hr">
          <img
            className="footerLogo ld mob"
            src={linkedin}
            alt="linkedin"
            width="40px"
          />
        </a>
      </SocMrezeMob>
    </Wrap>
  )
}

export default DonjiDioKontaktMob
