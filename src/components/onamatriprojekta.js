import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import CMSponosniCard from "./cmsponosnicard"

const Wrap = styled.div`
  ${
    "" /* display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; */
  }
  width: 100%;
  height: 550px;
  padding-top: 50px;
  padding-bottom: 86px;
  background: rgba(196, 196, 196, 0.1);
  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
  }
`
const Naslov = styled.div`
  font-size: 32px;
  width: 100%;
  height: auto;
  text-align: center;
  margin-bottom: 50px;

  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
  }
`

const OnamaTriProjekta = () => {
  return (
    <Wrap>
      <Naslov>Tri projekta na koje smo posebno ponosni</Naslov>
      <div
        style={{
          display: "flex",
          width: "768px",
          justifyContent: "space-between",
          margin: "0 auto 40px auto",
        }}
      >
        <CMSponosniCard />
        <CMSponosniCard />
        <CMSponosniCard />
      </div>
    </Wrap>
  )
}

export default OnamaTriProjekta
