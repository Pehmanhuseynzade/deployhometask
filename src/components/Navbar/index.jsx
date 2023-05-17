import React from 'react'
import { Link } from 'react-router-dom'
import "./index.module.css"
import { BsChevronDown } from 'react-icons/bs';
import "./index.css"
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
function Navbar() {
    const items = [
        {
          key: '1',
          label: (
            <div className='links'>
            <Link to={'/'} className='link' >Home</Link>
            <Link to={'/about'} className='link' >About</Link>
            <Link to={'/contact'} className='link'>Contact</Link>
            <Link to={'/login'} className='link'>Login</Link>
            <Link to={'/register'} className='link'>Register</Link>
            <Link to={'/services'} className='link'>Services</Link>

            </div>

          ),
        },
        // {
        //   key: '2',
        //   label: (
        //     <Link to={'/about'} className='link' >About</Link>
        //   ),
        // },
        // {
        //   key: '4',
        //   label: (
        //     <Link to={'/contact'} className='link'>Contact</Link>
        //   ),
        // },
        // {
        //     key: '5',
        //     label: (
        //       <Link to={'/login'} className='link'> Login</Link>
        //     ),
        //   },
        //   {
        //     key: '6',
        //     label: (
        //       <Link to={'/register'} className='link'>Register</Link>
        //     ),
        //   },
        //   {
        //     key: '7',
        //     label: (
        //       <Link to={'/services'} className='link'>Services</Link>
        //     ),
        //   },
      ];
  return (
    <>
    <header className='container'>
    <nav>
        <div>
            <h3 style={{color :"white"}}>React App | routing,json-server</h3>
        </div>
        <div>
        <ul>
            <Link to={'/'}><li className='reslist'>Home</li></Link>
            <Link to={'/about'}><li className='reslist'>About</li></Link>
            <Link to={'/contact'}><li className='reslist'>Contact</li></Link>
            <Link to={'/login'}><li className='reslist'>Login</li></Link>
            <Link to={'/register'}><li className='reslist'>Register</li></Link>
            <Link to={'/services'}><li className='reslist'>Services</li></Link>
            <ul className='dropdownn'>
            <Dropdown className='dropdown'
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space style={{color : "white"}}>
        Hover me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
            </ul>
        </ul>
        </div>
    </nav>
   </header>
    </>
  )
}

export default Navbar