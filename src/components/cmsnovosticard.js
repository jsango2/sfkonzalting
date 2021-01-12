import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import cardphoto from "../../content/assets/images/cmscard.png"

const CardWrap = styled.div`
  ${
    "" /* display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; */
  }
  width: 245px;
  height: 316px;
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

  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
  }
`

const CMSnovostCard = () => {
  return (
    <CardWrap>
      <div>
        <img src={cardphoto} alt="image" width="245px" />
      </div>
      <div
        style={{
          fontSize: "14px",
          lineHeight: "18px",
          marginTop: "19px",
          marginBottom: "10px",
        }}
      >
        Zadarska županija je objavila Program kreditiranja kroz financijski
        instrument Covid 19...
      </div>
      <div style={{ fontWeight: "700", fontSize: "14px" }}>Saznaj više ➞</div>
    </CardWrap>
  )
}

export default CMSnovostCard
