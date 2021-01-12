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

  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
  }
`

const Hero = () => {
  return (
    <HeroWrap className="hero">
      <img src={logo} alt="logo" width="238px" />
    </HeroWrap>
  )
}

export default Hero
