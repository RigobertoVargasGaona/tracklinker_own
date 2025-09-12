import React from 'react'

export const LogIn = () => {
  return (
    <div className='w-screen h-screen flex place-items-center justify-center'>
    <div class="bg-transparent p-8 rounded-xl shadow-2xl text-neutral-500">

        <form  class="grid grid-cols-1 gap-1 ">
        
            <label className='text-center text-xl mb-5'>Iniciar Sesión</label>
            <input class="outline-none border-x-slate-400 border-b text-gray-600 rounded-tl-lg  pl-2 h-10 " type=""placeholder='Nombre de usario'></input>
            <input class="outline-none  text-gray-600 rounded-br-lg border-b  pl-2 h-10  " type="password"placeholder='Contraseña'></input>
            
            <a className='text-sm mt-4' href='https://tailwindcss.com/docs/align-content#space-between '>Olvidó su contraseña?</a>
            <div className='  grid grid-cols-6 content-between mt-4 space-x-1'>
                <a  href='/Dashboard ' class=" px-4 py-1 border-solid md:border-dotted col-span-3 bg-sky-500 hover:bg-sky-700 rounded-md text-white  ">Ingresar</a>
                <button class=" px-4 py-1 col-span-3 bg-sky-500 hover:bg-sky-700 rounded-md text-white  ">Registrar</button>
                
            </div>
        </form>
    </div>
    </div>
  )
}
