import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import CartOverView from '../features/cart/CartOverView'
const LayOut = () => {
  return (
    <div>
       <Header/>
       <main>
        <Outlet/>
       </main>
    </div>
  )
}

export default LayOut
