import React from 'react'
import { Link } from 'react-router-dom'
import './login.css';

export const LogIn = () => {
  return (
    <div className='w-screen h-screen flex place-items-center justify-center'>
    <div class="w-[25vw] flex p-4 items-center justify-center bg-transparent  rounded-xl shadow-2xl text-neutral-500">

        <form  class="w-[40vw] grid grid-cols-1 gap-1">
        
            <label className='text-center text-xl mb-5'>Iniciar Sesión</label>
            <div className='relative '>
              <input class="outline-none  text-gray-600 rounded-br-lg border-b  pl-0 h-10 " type=" " placeholder='' id='user'></input>
              <label htmlFor="user" className='absolute top-3 right-64 transition-all duration-700'>Usuario</label>
            </div>

            <div className='relative '>
              <input class="outline-none  text-gray-600 rounded-br-lg border-b  pl-0 h-10 " type=" " placeholder='' id='user'></input>
              <label htmlFor="user" className='absolute top-3 right-40 transition-all duration-700'>Contraseña</label>
            </div>

            
            <a  className='text-sm mt-4' href='https://tailwindcss.com/docs/align-content#space-between '>Olvidó su contraseña?</a>
            <div className='  grid grid-cols-6 content-between mt-4 space-x-1'>
                <Link to="/Dashboard" class=" px-4 py-1 border-solid md:border-dotted col-span-3 bg-sky-500 hover:bg-sky-700 rounded-md text-white  ">Ingresar</Link>
                <button class=" px-4 py-1 col-span-3 bg-sky-500 hover:bg-sky-700 rounded-md text-white  ">Registrar</button>
                
            </div>
        </form>
    </div>
    </div>
  )
}
