import React from "react"

import Header from "./header"
import FooterSocMreze from "./footerSocMreze"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <FooterSocMreze />
    </div>
  )
}

export default Layout
