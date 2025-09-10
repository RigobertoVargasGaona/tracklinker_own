import React from 'react'

export const LogIn = () => {
  return (
    <div className='w-screen h-screen flex place-items-center justify-center'>
    <div class="bg-transparent p-8 rounded-xl shadow-2xl text-neutral-500">

        <form  class="grid grid-cols-1 gap-1 ">
        
            <label className='text-center text-xl mb-5'>Iniciar Sesión</label>
            <input class=" text-gray-600 rounded-tl-lg border border-gray-700 pl-2 " type=""placeholder='Nombre de usario'></input>
            <input class="text-gray-600 rounded-br-lg border border-gray-700 pl-2" type="password"placeholder='Contraseña'></input>
            
            <a className='text-sm' href='https://tailwindcss.com/docs/align-content#space-between'>Olvidó su contraseña?</a>
            <div className='grid grid-cols-2 content-between mt-4 space-x-1'>
                <button class="bg-sky-500 hover:bg-sky-700 rounded-md text-white">Ingresar</button>
                <button class="bg-sky-500 hover:bg-sky-700 rounded-md text-white">Registrar</button>
                
            </div>
        </form>
    </div>
    </div>
  )
}
