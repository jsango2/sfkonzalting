import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import logo from "../../content/assets/images/SF konz logo.svg"

const UslugeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 336px;
  padding-top: 86px;
  padding-bottom: 86px;

  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
  }
`
const Text = styled.div`
  ${"" /* display: flex;
  align-items: center;
  justify-content: center; */}
  width: 60%;
  height: auto;
  text-align: center;
  font-size: 22px;
  font-weight: 300;
  line-height: 26.77px;
  margin-bottom: 40px;

  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
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
  width: 285px;
  height: 46px;
  color: #393939;
  font-weight: 300;
  font-size: 22px;
  text-decoration: none;
  ${"" /* margin: 0 auto 0 130px; */}
  ${
    "" /* @media only screen and (max-width: 1000px) {
    marginleft: 108px;
  }
  @media only screen and (max-width: 768px) {
    margin-bottom: 54px;
    margin-left: 15%;
  }
  @media only screen and (max-width: 420px) {

  } */
  }
`

const CTAusluge = () => {
  return (
    <UslugeWrap>
      <Text>
        Pokrećemo pozitivne društvene promjene povećanjem učinkovitosti i
        konkurentnosti naših klijenata. SF Konzalting  - Vaš Partner u <br />
        pokretanju pozitivnih društvenih promjena
      </Text>
      <Link to="/usluge" style={{ textDecoration: "none" }}>
        <Button>USLUGE KOJE NUDIMO</Button>
      </Link>
    </UslugeWrap>
  )
}

export default CTAusluge
