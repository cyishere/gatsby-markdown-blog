import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import '../scss/main.scss'

const Layout = ({ children }) => {
  return(
    <>
      <Header />
      {children}
      <hr></hr>
      <Footer />
    </>
  )
}

export default Layout