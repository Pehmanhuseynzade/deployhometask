import React from 'react'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Services from '../Pages/Services'
import Notfound from '../Pages/Notfound'
import Mainrooter from '../Pages/Mainrooter'

export const ROUTES = [
    {
        path:'/',
        element:<Mainrooter/>,
        children:[
            {
                path:'',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/services',
                element:<Services/>
            },
            {
                path:'*',
                element:<Notfound/>
            }
        ]}
]
