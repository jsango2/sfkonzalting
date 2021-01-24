import React, { useState, useEffect } from "react"
import styled from "styled-components"
import logo from "../../content/assets/images/SF konz logo.svg"
import { Link } from "gatsby"
import { AiOutlineClose } from "react-icons/ai"

const Wrap = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 99999;
`
const Logo = styled.div`
  position: relative;
  width: 136px;
  ${
    "" /* @media only screen and (max-width: 1000px) {
    margin: 0 50px;
    width: 180px;
  } */
  }
`

export const MeniMobile = ({ handleClick, isOpen, pozadina }) => {
  return (
    <Wrap className={`${isOpen ? "show-menu" : "hide-menu"} `}>
      <AiOutlineClose
        className="closeMenuMobile"
        onClick={() => handleClick()}
      />

      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${pozadina})`,
          backgroundPosition: "center",
          backgroundSize: "cover ",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "121px",
          //   justifyContent: "center",
        }}
      >
        <Link to="/" onClick={() => handleClick()}>
          <Logo>
            <img src={logo} alt="logo" width="100%" />
          </Logo>
        </Link>

        <Link
          className="mobileLinks"
          to="/usluge"
          onClick={() => handleClick()}
        >
          USLUGE
        </Link>
        <Link
          className="mobileLinks"
          to="/novosti"
          onClick={() => handleClick()}
        >
          NOVOSTI
        </Link>
        <Link
          className="mobileLinks"
          to="/projekti"
          onClick={() => handleClick()}
        >
          PROJEKTI
        </Link>
        <Link className="mobileLinks" to="/onama" onClick={() => handleClick()}>
          O NAMA
        </Link>
      </div>
    </Wrap>
  )
}
