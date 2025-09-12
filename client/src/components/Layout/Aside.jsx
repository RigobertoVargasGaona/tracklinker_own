import React from 'react'
import {img} from '../../assets/img.js';

export const Aside = () => {
  return (
    <div className='h-screen'>
      <div className='text-center h-screen w-[15vw] bg-slate-500 font-serif text-2xl'>
      <section className='h-[20vh] pt-3 text-center flex flex-col' >
        Rigoberto Vargas
      </section>
   <section className='h-[40vh] pt- flex flex-col'>
  Modules
    <ul className='text-left  flex flex-col justify-between gap-y-5 mt-4 pl-5'>
      <li>
        <a href="#" className='flex gap-2'>
           <img src={img.inventoryIcon} alt=''></img>
           <p href='#' className='block'>Inventarios</p>
        </a>
      </li>
      <li><a href='#' className='block'>Usuarios</a></li>
      <li><a href='#' className='block'>Transformaciones</a></li>
      <li><a href='#' className='block'>Garantias</a></li>
      <li><a href='#' className='block'>Informes</a></li>
    </ul>
  </section>
      <section className='h-[40vh] pt-3'>
        <ul>
          <li><a href='#' className=''>Ayuda</a></li>
          <li><a href='#' className=''>Cerrar sesión</a></li>
        </ul>
      </section>
    </div>
    </div>
    
  )
}
