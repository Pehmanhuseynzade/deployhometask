import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Mainrooter() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Mainrooter