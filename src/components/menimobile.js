import React, { useState, useEffect } from "react"
import styled from "styled-components"
import logo from "../../content/assets/images/SF konz logo.svg"
import { Link } from "gatsby"
import { AiOutlineClose } from "react-icons/ai"

const Wrap = styled.div`
  position: fixed;
  top: 0;
  height: 115%;
  width: 100%;
  z-index: 99999;
`
const Logo = styled.div`
  position: relative;
  width: 136px;
`

export const MeniMobile = ({ handleClick, isOpen, pozadina }) => {
  const [isHorizontal, setIsHorizontal] = useState(false)
  useEffect(() => {
    var mql = window.matchMedia("(orientation: portrait)")

    // If there are matches, we're in portrait
    if (mql.matches) {
      setIsHorizontal(false)
    } else {
      setIsHorizontal(true)
    }

    window.addEventListener("resize", functionName)

    function functionName() {
      if (window.innerWidth > window.innerHeight) {
        setIsHorizontal(true)
      }

      if (window.innerWidth < window.innerHeight) {
        setIsHorizontal(false)
      }
    }
  }, [])

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
          position: "relative",
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
        <div
          className={`${
            isHorizontal ? "wrapLinksMobileHorizontal" : "wrapLinksMobile"
          }`}
        >
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
          <Link
            className="mobileLinks"
            to="/onama"
            onClick={() => handleClick()}
          >
            O NAMA
          </Link>
        </div>
      </div>
    </Wrap>
  )
}
