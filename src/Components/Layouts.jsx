import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header/Header'
import Footer from './Footer/Footer'


export default function Layouts({cart, fav, openModal, theme, changeTheme}) {
  return (
    <>
      <Header fav={fav} cart={cart} openModal={openModal} theme={theme} changeTheme={changeTheme}/>
      <div>
        <Outlet/>
      </div>
      <Footer theme={theme}/>
    </>
  )
}
