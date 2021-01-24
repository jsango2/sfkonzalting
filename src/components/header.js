import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import logo from "../../content/assets/images/logo_header.svg"
import Headroom from "react-headroom"
import styled from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi"
import { MeniMobile } from "./menimobile"
import useScrollBlock from "./useBlockScroll"
import bg1 from "../../content/assets/images/bg1.svg"
import bg2 from "../../content/assets/images/bg2.svg"
import bg3 from "../../content/assets/images/bg3.svg"
import bg4 from "../../content/assets/images/bg4.svg"
import bg5 from "../../content/assets/images/bg5.svg"
import bg6 from "../../content/assets/images/bg6.svg"

const HeaderWrap = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 60em) {
  }
`

const Logo = styled.div`
  position: relative;
  top: 4px;
  margin-right: 15px;
  margin-left: 126px;
  width: 168px;
  opacity: 1;
  @media only screen and (max-width: 1010px) {
    position: relative;

    margin-left: 44px;
  }

  @media only screen and (max-width: 780px) {
    width: 131px;
  }
  @media only screen and (max-width: 430px) {
    margin-left: 40px;
  }
`
const Hamburger = styled.div`
  cursor: pointer;
  color: black;
  position: relative;
  top: 2px;
  margin-right: 30px;

  @media screen and (min-width: 780px) {
    display: none;
  }
`

const Header = () => {
  const [display, setDisplay] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [image, setImage] = useState()
  const images = [bg1, bg2, bg3, bg4, bg5, bg6]
  const [blockScroll, allowScroll] = useScrollBlock()
  const handleClick = () => {
    setIsOpen(false)
    allowScroll()
  }

  return (
    <>
      <MeniMobile handleClick={handleClick} isOpen={isOpen} pozadina={image} />
      <Headroom
        disableInlineStyles
        onPin={() => console.log("pinned")}
        onUnpin={() => console.log("unpinned")}
        style={{
          zIndex: "9999",
        }}
      >
        <header
          className="headerShadow"
          style={{
            position: "relative",
            background: `white`,
            zIndex: "9999",
          }}
        >
          <HeaderWrap className="header-wrap">
            <div className="logoHeader">
              <Link to="/">
                <Logo>
                  <img src={logo} alt="logo" width="100%" />
                </Logo>
              </Link>
            </div>
            <nav className={`primary-nav ${display}`}>
              <Link
                to="/usluge"
                className="LinkHeader"
                activeClassName="activeLink"
              >
                USLUGE
              </Link>

              <Link
                to="/novosti"
                className="LinkHeader"
                activeClassName="activeLink"
              >
                NOVOSTI
              </Link>
              <Link
                to="/projekti"
                className="LinkHeader"
                activeClassName="activeLink"
              >
                PROJEKTI
              </Link>
              <Link
                to="/onama"
                className="LinkHeader"
                activeClassName="activeLink"
              >
                O NAMA
              </Link>
            </nav>
            <Hamburger
              onClick={() => {
                setIsOpen(true)
                blockScroll()
                setImage(images[Math.floor(Math.random() * 5 + 1)])
              }}
            >
              <GiHamburgerMenu />
            </Hamburger>
          </HeaderWrap>
        </header>
      </Headroom>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDesc: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDesc: ``,
}

export default Header
