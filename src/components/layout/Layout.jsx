import React from 'react'
import Aside from "../aside/Aside"
import Header from "../header/Header";
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
        <Aside />
        <Header />
        <Outlet />
    </>
  )
}

export default Layout
