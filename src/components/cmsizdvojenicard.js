import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import cardphoto from "../../content/assets/images/cmsizdvojeno.png"

const CardWrap = styled.div`
  ${
    "" /* display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; */
  }
  position: relative;
  width: 245px;
  height: 349px;
  ${"" /* padding-left: 17px; */}
  ${"" /* padding-bottom: 86px;  */}

  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
  }
`
const Text = styled.div`
  color: white;
  font-size: 14px;
  font-weight: 300;
  line-height: 18px;

  width: 210px;
  height: auto;
  margin-top: 10px;

  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
  }
`
const Naslov = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 900;
  line-height: 22px;

  width: 210px;
  height: auto;
  margin-top: 15px;

  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
  }
`
const WrapText = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  bottom: -155px;
  left: 15px;
  z-index: 20;

  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
  }
`

const CMSizdvojeniCard = () => {
  return (
    <CardWrap>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${cardphoto})`,
          backgroundPosition: "center",
          backgroundSize: "cover ",
          zIndex: "1",
        }}
      >
        <div className="overlayGradient" />
        <WrapText>
          <div style={{ fontWeight: "700", fontSize: "14px", color: "white" }}>
            Saznaj više ➞
          </div>

          <Naslov>NASLOV PROJEKTA U TRI REDA NASLOV PROJEKTA U TRI REDA</Naslov>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna
          </Text>
        </WrapText>
      </div>
    </CardWrap>
  )
}

export default CMSizdvojeniCard
