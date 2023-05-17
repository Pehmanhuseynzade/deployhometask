import React from 'react'
import {Helmet} from "react-helmet";

function About() {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'250px'}}> <h1>About</h1> </div>

    </>
  )
}

export default About