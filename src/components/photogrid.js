import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import img1 from "../../content/assets/images/1.png"
import img2 from "../../content/assets/images/2.png"
import img3 from "../../content/assets/images/3.png"
import img4 from "../../content/assets/images/4.png"
import img5 from "../../content/assets/images/5.png"
import img6 from "../../content/assets/images/6.png"
import img7 from "../../content/assets/images/7.png"
import img8 from "../../content/assets/images/8.png"
import img9 from "../../content/assets/images/9.png"

const PhotoWrap = styled.div`
  width: 100%;

  ${"" /* padding-top: 86px;
  padding-bottom: 86px; */}

  @media only screen and (max-width: 60em) {
    ${"" /* display: block;
    padding: 0 0; */}
  }
`

const PhotoGrid = () => {
  return (
    <PhotoWrap>
      <div class="div-block-57 div-block-58">
        <div id="1" class="_1 w-node-a85ebd1473d6-7a98c21f"></div>
        <div id="6" class="_6 w-node-a85ebd1473d7-7a98c21f"></div>
        <div id="2" class="_2 w-node-a85ebd1473d8-7a98c21f"></div>
        <div id="3" class="_3 w-node-a85ebd1473d9-7a98c21f"></div>
        <div id="4" class="_4 w-node-a85ebd1473da-7a98c21f"></div>
        <div id="5" class="_5 w-node-a85ebd1473db-7a98c21f"></div>
        <div id="7" class="_7 w-node-a85ebd1473dc-7a98c21f"></div>
        <div id="8" class="_8 w-node-a85ebd1473dd-7a98c21f"></div>
        <div id="9" class="_9 w-node-a85ebd1473de-7a98c21f"></div>
      </div>
    </PhotoWrap>
  )
}

export default PhotoGrid
