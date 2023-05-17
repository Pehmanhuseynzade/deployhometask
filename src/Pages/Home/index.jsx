import React from 'react'
import {Helmet} from "react-helmet";

function Home() {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'250px'}}> <h1>HOME</h1> </div>
    </>
  )
}

export default Home