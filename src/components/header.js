import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import logo from "../../content/assets/images/logo_header.svg"
import Headroom from "react-headroom"
import styled from "styled-components"

const HeaderWrap = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  ${"" /* padding: 1.85rem 0; */}
  height: 74px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 60em) {
    display: block;
    padding: 0 0;
  }
`
const Telefon = styled.div`
  @media only screen and (max-width: 60em) {
    display: none;
  }
`

const Logo = styled.div`
  ${"" /* display: inline-block; */}
  position: relative;
  top: 4px;
  margin-right: 15px;
  margin-left: 126px;
  width: 168px;
  opacity: 0.4;
  ${
    "" /* @media only screen and (max-width: 960px) {
    position: relative;
    top: 15px;
    margin-left: 130px;
  }

  @media only screen and (max-width: 530px) {
    position: relative;
    top: 15px;
    margin-left: 70px;
    width: 60px;
  }
  @media only screen and (max-width: 430px) {
    margin-left: 40px;
  } */
  }
`

const Header = () => {
  const [display, setDisplay] = useState("")

  return (
    <Headroom
      disableInlineStyles
      onPin={() => setDisplay("animation")}
      onUnpin={() => setDisplay("")}
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
        <HeaderWrap className={`header-wrap`}>
          <div className="logoHeader">
            <Link to="/">
              <Logo>
                <img src={logo} alt="logo" width="168px" />
              </Logo>
            </Link>
          </div>
          <nav className={`primary-nav ${display}`}>
            <Link to="/usluge" className="LinkHeader">
              USLUGE
            </Link>

            <Link to="/novosti" className="LinkHeader">
              NOVOSTI
            </Link>
            <Link to="/usluge" className="LinkHeader">
              PROJEKTI
            </Link>
            <Link to="/onama" className="LinkHeader">
              O NAMA
            </Link>
          </nav>
        </HeaderWrap>
      </header>
    </Headroom>
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
