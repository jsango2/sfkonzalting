import React from "react"
import styled from "styled-components"
import Footer from "./footer"

const PhotoWrap = styled.div`
  width: 100%;

  ${"" /* padding-top: 86px;
  padding-bottom: 86px; */}

  @media only screen and (max-width: 550px) {
    display: none;
  }
`

const PhotoGrid = () => {
  return (
    <>
      <PhotoWrap>
        <div className="div-block-57 div-block-58">
          <div id="1" className="_1 w-node-a85ebd1473d6-7a98c21f"></div>
          <div id="6" className="_6 w-node-a85ebd1473d7-7a98c21f"></div>
          <div id="2" className="_2 w-node-a85ebd1473d8-7a98c21f"></div>
          <div id="3" className="_3 w-node-a85ebd1473d9-7a98c21f"></div>
          <div id="4" className="_4 w-node-a85ebd1473da-7a98c21f"></div>
          <div id="5" className="_5 w-node-a85ebd1473db-7a98c21f"></div>
          <div id="7" className="_7 w-node-a85ebd1473dc-7a98c21f"></div>
          <div id="8" className="_8 w-node-a85ebd1473dd-7a98c21f"></div>
          <div id="9" className="_9 w-node-a85ebd1473de-7a98c21f"></div>
        </div>
      </PhotoWrap>
      <Footer />
    </>
  )
}

export default PhotoGrid
