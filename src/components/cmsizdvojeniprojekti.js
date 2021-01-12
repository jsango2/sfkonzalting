import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import CMSizdvojeniCard from "./cmsizdvojenicard"
import CMSnovostCard from "./cmsnovosticard"

const NovostiWrap = styled.div`
  ${
    "" /* display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; */
  }
  width: 100%;
  height: auto;
  ${"" /* padding-top: 86px;
  padding-bottom: 86px; */}

  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
  }
`
const Naslov = styled.div`
  font-size: 32px;
  width: 100%;
  height: auto;
  margin-left: 129px;
  margin-bottom: 30px;

  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
  }
`

const CMSizdvojeniProjekti = () => {
  return (
    <>
      <Naslov>Izdvojeni projekti</Naslov>
      <div
        style={{
          display: "flex",
          width: "80%",
          justifyContent: "space-between",
          margin: "0 auto 40px auto",
        }}
      >
        <CMSizdvojeniCard />
        <CMSizdvojeniCard />
        <CMSizdvojeniCard />
        <CMSizdvojeniCard />
      </div>
    </>
  )
}

export default CMSizdvojeniProjekti
