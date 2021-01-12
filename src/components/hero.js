import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import logo from "../../content/assets/images/SF konz logo.svg"

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
  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
  }
`

const Hero = () => {
  return (
    <HeroWrap>
      <img src={logo} alt="logo" width="238px" />
    </HeroWrap>
  )
}

export default Hero
