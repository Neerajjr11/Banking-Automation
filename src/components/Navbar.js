import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='bg-gray-300'>
        <ul className='flex space-x-8 justify-end p-3'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Staff Login</li>
        </ul>
      </div>
      
      <nav class="flex items-center justify-between flex-wrap bg-gray-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">

          <span class="font-semibold text-xl tracking-tight">Devansh Ajmera</span>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
              Docs
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
              Examples
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
              Blog
            </a>
          </div>
          <div>
            <Link to="/login" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white hover:bg-white mt-4 lg:mt-0">Login</Link>
          </div>
        </div>
      </nav>
      <div>
        <ul className='flex justify-around shadow-lg p-5'>
          <li>Retail Banking</li>
          <li>Corporate Banking</li>
          <li>Internation Banking</li>
          <li>Apply Mobile Banking</li>
          <li>Services</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar