import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const CardWrap = styled.div`
  position: relative;
  z-index: 500;
  width: 245px;
  height: 349px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 30px;

  transition: max-height 0.5s;

  &:hover .textIzdvojeni {
    opacity: 1;
    height: 100px;
  }
  @media only screen and (max-width: 538px) {
    margin-left: 8px;
    margin-right: 8px;
    min-width: 90vw;
    height: 345px;
    margin-top: 10px;
    background-color: rgb(245, 245, 245);
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
  height: 100%;

  padding-left: 15px;
  padding-bottom: 23px;
  z-index: 20;

  @media only screen and (max-width: 60em) {
  }
`

const CMSizdvojeniCardMobLayout = props => {
  return (
    <Link style={{ textDecoration: "none" }} to={`/projekti/${props.slug}`}>
      <CardWrap>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${props.fotoFront})`,
            backgroundPosition: "center",
            backgroundSize: "cover ",
            zIndex: "25",
          }}
        >
          <div className="overlayGradient" />
          <WrapText>
            <div className="titleWrapIzdvojeniCard">
              {/* <div
                style={{ fontWeight: "700", fontSize: "14px", color: "white" }}
              >
                Saznaj više ➞
              </div> */}

              <Naslov>{props.naslov}</Naslov>
            </div>
            <Text className="textIzdvojeni">{props.uvodUprojekt}</Text>
          </WrapText>
        </div>
      </CardWrap>
    </Link>
  )
}

export default CMSizdvojeniCardMobLayout
