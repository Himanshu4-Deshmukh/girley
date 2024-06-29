import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import GoToTopButton from '../gototop/GoToTopButton'

function Layout({children}) {
  return (
    <div>
        <Navbar/>
        <div className="content">
            {children}
        </div>
        <GoToTopButton/>
        <Footer/>
    </div>
  )
}

export default Layout