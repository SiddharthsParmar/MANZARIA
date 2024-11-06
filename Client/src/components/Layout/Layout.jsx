import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from "react-helmet";

const Layout = (props , title , keywords , decription,author) => {
  return (
    <>
            {/* <Helmet>
                <meta charSet="utf-8" />
               
                <title>{title}</title>
                <meta name="description" content={decription} />
                <meta name="keywords" content={keywords} />


                
            </Helmet> */}
     <Header/>
     
     <main style={{minHeight:"80vh"}}>
     {props.children}
     </main>
     <footer>

     <Footer />
     </footer>
   </>
  )
}

export default Layout