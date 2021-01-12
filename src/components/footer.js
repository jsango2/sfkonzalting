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

  width: 100%;
  height: 346px;
`

const WrapOut = styled.div`
  position: relative;

  width: 100%;
  height: 346px;
`
const WrapIn = styled.div`
  position: relative;
  padding-left: 200px;
  padding-top: 102px;
  width: 90%;
  height: 200px;
`
const WrapFooterText = styled.div`
  margin-left: 88px;
  position: relative;
  top: -15px;
  width: 90%;
  height: 200px;
`

const Footer = () => (
  <WrapOut>
    <Background />
    <WrapIn>
      <div style={{ display: "flex" }}>
        <Link to="/">
          <img className="footerLogo" src={logo} alt="LogoDom" width="100px" />
        </Link>
        <WrapFooterText>
          {" "}
          <a href="http://www.instagram.com">
            <img
              className="footerLogo"
              src={instagram}
              alt="instagram"
              width="40px"
            />
          </a>
          <a href="http://www.facebook.com">
            <img
              className="footerLogo"
              src={facebook}
              alt="facebook"
              width="40px"
            />
          </a>
          <a href="http://www.linkedin.com">
            <img
              className="footerLogo"
              src={linkedin}
              alt="linkedin"
              width="40px"
            />
          </a>
          <div
            style={{
              color: "white",
              fontWeight: "300",
              fontSize: "18px",
              marginTop: "28px",
              lineHeight: "23px",
              letterSpacing: "0.035em",
            }}
          >
            SF KONZALTING, zajednički obrt za poslovno savjetovanje <br /> OIB:
            26259638284 | IBAN: HR6224070001100065655 (OTP banka)
          </div>
          <div
            style={{
              color: "white",
              fontWeight: "300",
              fontSize: "18px",
              marginTop: "21px",
              letterSpacing: "0.035em",
            }}
          >
            Copyright © 2021 SF konzalting. All rights reserved. Web development
            by sutra.hr
          </div>
        </WrapFooterText>
      </div>
    </WrapIn>
  </WrapOut>
)

export default Footer
