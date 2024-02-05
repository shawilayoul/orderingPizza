import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import CartOverView from '../features/cart/CartOverView'
const LayOut = () => {
  return (
    <div className='grid h-screen grid-rows-[auto_1fr_auto]'>
       <Header/>
       <main>
        <Outlet/>
       </main>
       <CartOverView/>
    </div>
  )
}

export default LayOut
