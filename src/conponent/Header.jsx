import React from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingBag} from 'react-icons/fi'
import { useSelector} from 'react-redux'


function Header() {

  const {cartItems} = useSelector((state)=> state.cart)

  return (
    <div className='header'>  
        <h2>
            Logo Here
        </h2>
        <div className='Nav-bar'>
         <Link to={'/'}> Home </Link>
         <Link to={'/cart'}> <FiShoppingBag/>
         <p>{cartItems.length}</p>
         </Link>

        </div>
    </div>
  )
}

export default Header