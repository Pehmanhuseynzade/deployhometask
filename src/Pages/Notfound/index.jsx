import React from 'react'
import {Helmet} from "react-helmet";

function Notfound() {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Notfound</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <h1 style={{color:"red"}}> The Page is Notfound| Error 404</h1>
    </>
        

  )
}

export default Notfound