import React from 'react'
import ShoppingCart from './ShoppingCart'




const Navbar = () => {

  let Links = [
    {name:"HOME",link:"/"},
    {name:"SHOP",link:"/"},
    {name:"SUCURSALES",link:"/"}
  ]
  return (
    <div>
    <div className='shadow-md w-full fixed top-0 left-0 z-10'>
      <div className='md:flex items-center justify-between bg-teal-700 py-4 md:px-10 px-7 '>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-roboto text-white'>
          <span className='animate-spin-slow text-3xl text-white mr-1 pt-2'>
          <ion-icon name="logo-react"></ion-icon>
          </span>
           devShop
        </div>
        <ul className='md:flex md:items-center'>
          {Links.map((link)=> (
            <li key={link.name} className="md:ml-8 text-xl">
              <a href={link.link} className="text-white hover:text-gray-400 duration-500"> {link.name} </a>
            </li>
          ))}
          <ShoppingCart></ShoppingCart>
        </ul>
      </div>
    </div>
       
    
    </div>
  )
}

export default Navbar