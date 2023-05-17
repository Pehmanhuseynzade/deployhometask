import React from 'react'
import {Helmet} from "react-helmet";

function Login() {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'250px'}}> <h1>Login</h1> </div>
    </>
  )
}

export default Login