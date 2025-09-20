import React from 'react'
import {img} from '../../assets/img.js';

export const Aside = () => {
  return (
    <div className='h-screen'>
      <div className='text-center h-screen w-[15vw] bg-slate-300 font-serif text-2xl'>
      <section className='h-[20vh] pt-3 text-center flex flex-col' >
        Rigoberto Vargas
      </section>
   <section className='h-[40vh] pt- flex flex-col'>
  Menú
    <ul className='text-left  flex flex-col justify-between gap-y-5 mt-4 pl-5'>
      <li>
        <a href="#" className='flex gap-2'>
           <img src={img.inventoryIcon} alt=''></img>
           <p href='#' className='block'>Inventarios</p>
        </a>
      </li>

      <li>
        <a href='#' className='flex gap-2 items-center'>
        <img src={img.usersIcon} alt=''></img>
        <p href='#' className='block'>Usuarios</p>
        </a>
      </li>

      <li>
        <a href='#' className='flex gap-2'>
          <img src={img.transformIcon} alt=''></img>
          <p href='#' className="block" block>Transformación</p>
        </a>
       </li>

      <li>
        <a href='#' className='flex gap-2'>
          <img src={img.ticketsIcon} alt="" />
          <p>Garantias</p>
        </a>
      </li>

      <li>
        <a href='#' className='flex gap-2'>
         <img src={img.reportsIcon} alt="" /> 
         <p href='#' className="block" block>Informes</p>
        </a>
      </li>
    </ul>
  </section>
      <section className='h-[40vh] pt-3'>
        <ul className='text-left  flex flex-col justify-between gap-y-5 mt-4 pl-5'>
          
          
          <li>
            <a href="#" className='flex gap-2'>
              <img src={img.helpIcon} alt=''></img>
              <p href='#' className='block'>Ayuda</p>
            </a>
          </li>
          <li>
            <a href="#" className='flex gap-2'>
              <img src={img.logoutIcon} alt=''></img>
              <p href='#' className='block'>Salir</p>
            </a>
          </li>

          
        </ul>
      </section>
    </div>
    </div>
    
  )
}
