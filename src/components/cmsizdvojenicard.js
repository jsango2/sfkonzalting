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
  z-index: 500;
  width: 245px;
  height: 349px;
  ${"" /* padding-left: 17px; */}
  ${"" /* padding-bottom: 86px;  */}
  transition: max-height 1.5s;

  &:hover .textIzdvojeni {
    opacity: 1;
    height: 100px;
  }
  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
  }
`
const Text = styled.div`
  position: relative;
  color: white;
  font-size: 14px;
  font-weight: 300;
  line-height: 18px;

  width: 210px;

  margin-top: 10px;
  opacity: 0;
  height: 0;

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
  text-transform: uppercase;
}
  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
  }
`
const WrapText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  ${"" /* bottom: -155px;
  left: 15px; */}
  padding-left:15px;
  padding-bottom: 23px;
  z-index: 20;

  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
  }
`

const CMSizdvojeniCard = props => {
  return (
    <Link style={{ textDecoration: "none" }} to={`/projekti/${props.slug}`}>
      <CardWrap>
        {console.log(props)}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${props.coverFoto})`,
            backgroundPosition: "center",
            backgroundSize: "cover ",
            zIndex: "25",
          }}
        >
          <div className="overlayGradient" />
          <WrapText>
            <div className="titleWrapIzdvojeniCard">
              <div
                style={{ fontWeight: "700", fontSize: "14px", color: "white" }}
              >
                Saznaj više ➞
              </div>

              <Naslov>{props.naslov}</Naslov>
            </div>
            <Text className="textIzdvojeni">{props.uvodUprojekt}</Text>
          </WrapText>
        </div>
      </CardWrap>
    </Link>
  )
}

export default CMSizdvojeniCard
