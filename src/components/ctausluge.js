import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const UslugeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 336px;
  padding-top: 90px;
  padding-bottom: 86px;

  @media only screen and (max-width: 60em) {
  }
`
const Text = styled.div`
  width: 60%;
  height: auto;
  text-align: center;
  font-size: 22px;
  font-weight: 400;
  line-height: 26.77px;
  margin-bottom: 40px;

  @media only screen and (max-width: 60em) {
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
`

const CTAusluge = () => {
  return (
    <UslugeWrap>
      <Text>
        SF Konzalting - Vaš Partner u pokretanju pozitivnih društvenih promjena.
        Uživamo u svom poslu, kreirajući i stvarajući s posebnom energijom koja
        zrači promjene.
      </Text>
      <Link to="/usluge" style={{ textDecoration: "none" }}>
        <Button className="button">USLUGE KOJE NUDIMO</Button>
      </Link>
    </UslugeWrap>
  )
}

export default CTAusluge
