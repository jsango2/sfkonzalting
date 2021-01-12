import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
