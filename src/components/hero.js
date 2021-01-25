import React from "react"
import styled from "styled-components"
import logo from "../../content/assets/images/SF konz logo.svg"
import Lottie from "lottie-react"
import lijevoLottie from "../../content/assets/images/lijeva strana.json"
import desnoLottie from "../../content/assets/images/desna strana.json"
import mobileLottie from "../../content/assets/images/mob anim reg slow 07.json"
import Projekti from "./../pages/projekti"
import { Link } from "gatsby"

const HeroWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${"" /* max-width: 1280px; */}
  height: 476px;
  background: linear-gradient(
    114.13deg,
    #ac84bc -0.34%,
    #a684bc 2.01%,
    #9382bc 5.66%,
    #747fbd 10.15%,
    #6c7ebd 11.12%,
    #6c84c1 14.71%,
    #6a94cc 20.82%,
    #67aee0 28.65%,
    #63c6f1 34.49%,
    #95d2dc 49.73%,
    #b7dece 64.66%,
    #c3e3c8 73.15%,
    #eba8c1 96.4%,
    #bc9fba 101.81%,
    #9799b5 106.72%,
    #8095b2 110.55%,
    #7794b1 112.81%
  );
  @media only screen and (max-width: 550px) {
    height: 300px;
  }
  @media only screen and (max-width: 450px) {
    display: none;
  }
`
const HeroWrapMobile = styled.div`
  position: relative;
  width: 100%;
  padding-top: 38px;
  ${"" /* max-width: 1280px; */}
  height: 810px;
  background: linear-gradient(
    27.6deg,
    #63c6f1 -19.7%,
    #95d2dc 27.77%,
    #b7dece 76.96%,
    #c3e3c8 119.78%
  );

  @media only screen and (min-width: 450px) {
    display: none;
  }
`

const Logo = styled.div`
  position: relative;
  margin: 0 100px;
  width: 238px;
  @media only screen and (max-width: 1000px) {
    margin: 0 50px;
    width: 180px;
  }
`
const LogoMob = styled.div`
  position: relative;
  margin: 20px auto;
  width: 124px;
`
const Button = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: white;
  margin: 30px auto;
  z-index: 2;
  width: 220px;
  height: 46px;
  color: #85cfe4;
  font-weight: 300;
  font-size: 18px;
  &:hover {
    background-color: #f7f7f7;
  }
  &:active {
    background-color: #c5e4eccc;
  }
`

const Hero = () => {
  return (
    <>
      <HeroWrapMobile>
        <div
          style={{
            fontSize: "18px",
            lineHeight: "21.9px",
            fontWeight: "300",
            margin: "0 auto 49px auto",
            width: "204px",
            textAlign: "center",
            color: "white",
          }}
        >
          Vaš Partner u povećanju učinkovitosti i pokretanju pozitivnih
          društvenih promjena.
        </div>
        <Lottie
          style={{
            position: "absolute",
            width: "63%",
            height: "63%",
            top: "50%",
            left: "47%",
            transform: "translate(-50%, -50%)",
          }}
          animationData={mobileLottie}
        />

        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "680px",
          }}
          className="removeUnderline"
        >
          <Link to="/usluge">
            <Button>USLUGE KOJE NUDIMO</Button>
          </Link>
        </div>
      </HeroWrapMobile>
      <HeroWrap>
        <Lottie animationData={lijevoLottie} />
        <Logo>
          <img src={logo} alt="logo" width="100%" />
        </Logo>
        <Lottie animationData={desnoLottie} />
      </HeroWrap>
    </>
  )
}

export default Hero
