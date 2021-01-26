import React from "react"
import styled from "styled-components"
import logo from "../../content/assets/images/logo_footer.svg"
import instagram from "../../content/assets/images/instagram_icon.svg"
import facebook from "../../content/assets/images/facebook_icon.svg"
import linkedin from "../../content/assets/images/linkedin_icon.svg"

import { Link } from "gatsby"

const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    104.94deg,
    #ac84bc -2.06%,
    #a684bc 0.62%,
    #9382bc 4.8%,
    #747fbd 9.93%,
    #6c7ebd 11.03%,
    #6c84c1 15.14%,
    #6a94cc 22.13%,
    #67aee0 31.08%,
    #63c6f1 37.75%,
    #95d2dc 55.17%,
    #b7dece 72.23%,
    #c3e3c8 81.94%,
    #eba8c1 108.52%,
    #bc9fba 114.7%,
    #9799b5 120.31%,
    #8095b2 124.69%,
    #7794b1 127.27%
  );
  transform: rotate(180deg);
`

const WrapOut = styled.div`
  position: relative;

  width: 100%;

  height: auto;
  padding-bottom: 64px;
`
const WrapFlex = styled.div`
  display: flex;

  flex-direction: column;
  margin: 0 auto;
`
const WrapIn = styled.div`
  position: relative;
  padding-top: 102px;
  width: 90%;

  height: auto;
  padding-left: 0;
  margin: 0 auto;
`
const WrapLogo = styled.div`
  margin: 0 auto 42px auto;
  @media only screen and (max-width: 850px) {
  }
`
const WrapFooterText = styled.div`
  position: relative;
  top: -15px;
  width: 90%;

  height: auto;
  margin: 0 auto;
  text-align: center;
`

const SocMrezeMob = styled.div`
  position: absolute;
  bottom: 130px;
  left: 50%;
  margin-top: 33px;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 735px) {
    display: none;
  }
`
const TextSF = styled.div`
  color: white;
  font-weight: 300;
  font-size: 18px;
  margin-top: 28px;
  margin-bottom: 116px;
  line-height: 23px;
  letter-spacing: 0.035em;

  @media only screen and (max-width: 735px) {
    font-size: 12px;
    margin-top: 28px;
    line-height: 17px;
    margin-bottom: 25px;
  }
`

const Footer = () => (
  <WrapOut>
    <Background />
    <WrapIn>
      <WrapFlex>
        <WrapLogo>
          <Link to="/">
            <img
              className="footerLogoM"
              src={logo}
              alt="LogoDom"
              width="73px"
            />
          </Link>
        </WrapLogo>
        <WrapFooterText>
          <TextSF>
            SF KONZALTING, zajednički obrt za poslovno savjetovanje <br /> OIB:
            26259638284 | IBAN: HR6224070001100065655 (OTP banka)
          </TextSF>
          <SocMrezeMob>
            <a href="https://www.instagram.com/sfkonzalting/">
              <img
                className="footerLogo insta"
                src={instagram}
                alt="instagram"
                width="40px"
              />
            </a>
            <a href="https://web.facebook.com/SF-Konzalting-432018117547648/services/?service_id=2385723278127719&_rdc=1&_rdr">
              <img
                className="footerLogo fb"
                src={facebook}
                alt="facebook"
                width="40px"
              />
            </a>
            <a href="https://www.linkedin.com/in/sf-konzalting-business-consulting-services-35618a187/?originalSubdomain=hr">
              <img
                className="footerLogo ld"
                src={linkedin}
                alt="linkedin"
                width="40px"
              />
            </a>
          </SocMrezeMob>
          <TextSF style={{ marginBottom: "8px" }}>
            Copyright © 2021 SF konzalting. All rights reserved.
            <br />
            Web development by <strong>sutra.hr</strong>
          </TextSF>
        </WrapFooterText>
      </WrapFlex>
    </WrapIn>
  </WrapOut>
)

export default Footer
