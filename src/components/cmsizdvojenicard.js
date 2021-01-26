import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const CardWrap = styled.div`
  max-width: 280px;
  width: 245px;
  min-width: 230px;
  height: 345px;
  margin-left: 8px;
  margin-right: 8px;
  animation: fade-in 1s ease-out both;
  ${"" /* margin-left: 10px;
  margin-right: 10px; */}
  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  &:hover .textIzdvojeni {
    height: 100px;
    opacity: 1;
  }
  @media only screen and (max-width: 633px) {
    height: 345px;
    max-width: 100%;
    width: 100%;
    ${"" /* margin-bottom: 30px; */}
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

  }
`
const WrapText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  min-height: 345px;

  padding-left: 15px;
  padding-bottom: 23px;
  z-index: 20;

  @media only screen and (max-width: 60em) {
  }
`

const CMSizdvojeniCard = props => {
  return (
    <Link style={{ textDecoration: "none" }} to={`/projekti/${props.slug}`}>
      <CardWrap>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${props.fotoFront})`,
            top: "0",
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
