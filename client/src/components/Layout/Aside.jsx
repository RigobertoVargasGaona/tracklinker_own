import React from 'react'
import {img} from '../../assets/img.js';
import {Link } from 'react-router-dom' 


export const Aside = () => {
  return (
    <div className='h-screen'>
      <div className='text-center h-screen w-[15vw] bg-slate-200 font-serif text-2xl'>
        
      <section className='h-[20vh] pt-3  flex  items-center  pl-6 pr-6' >
         <a href="#" className='flex gap-2  text-slate-500' >
            <img className=' w-16' src={img.userIcon} alt=''></img>
            <p href='#' className='text-left text-wrap'>Rigoberto Vargas Gaona</p>
           </a>
      </section>
   <section className='h-[50vh] pt- flex flex-col'>
  Menú
    <ul className='text-left  flex flex-col justify-between gap-y-5 mt-4 pl-6 pr-6'>
      <li>
        <Link to ='/inventarios' className='flex gap-2  shadow-sm text-slate-500 rounded-lg hover:bg-cyan-500 hover:shadow-xl hover:text-white
           hover:shadow-cyan-500/50' >
           <img className='pl-2' src={img.inventoryIcon} alt=''></img>
           <p  className='block'>Inventarios</p>
            
        </Link>
      </li>
      <li>
        <Link to='/dashboardIn' className='flex gap-2  shadow-sm text-slate-500 rounded-lg hover:bg-cyan-500 hover:shadow-xl hover:text-white
           hover:shadow-cyan-500/50' >
           <img className='pl-2' src={img.cardIcon} alt=''></img>
           <p href='#' className='block'>Dashboard</p>
        </Link>
      </li>

      <li>
        <Link  to ='/users'  className='flex gap-2  shadow-sm text-slate-500 rounded-lg hover:bg-cyan-500 hover:shadow-xl hover:text-white
           hover:shadow-cyan-500/50'>
            <img className='pl-2' src={img.usersIcon} alt=''></img>
            <p  className='block'>Usuarios</p>
        </Link>
      </li>

      <li>
        <Link to='/transformacion'  className='flex gap-2  shadow-sm text-slate-500 rounded-lg hover:bg-cyan-500 hover:shadow-xl hover:text-white
           hover:shadow-cyan-500/50'>
          <img className='pl-2' src={img.transformIcon} alt=''></img>
          <p href='#' className="block" block>Transformación</p>
        </Link>
       </li>

      <li>
        <Link to='/garantias' className='flex gap-2  shadow-sm text-slate-500 rounded-lg hover:bg-cyan-500 hover:shadow-xl hover:text-white
           hover:shadow-cyan-500/50'>
          <img className='pl-2' src={img.ticketsIcon} alt="" />
          <p>Garantias</p>
        </Link>
      </li>

      <li>
        <Link to='/informes' className='flex gap-2  shadow-sm text-slate-500 rounded-lg hover:bg-cyan-500 hover:shadow-xl hover:text-white
           hover:shadow-cyan-500/50'>
         <img className='pl-2' src={img.reportsIcon} alt="" /> 
         <p className="block" block>Informes</p>
        </Link>
      </li>
    </ul>
  </section>
      <section className='h-[30vh] pt-3 '>Otros
        <ul className='text-left  flex flex-col justify-between gap-y-5 mt-4 pl-5 pr-5'>
          
          
          <li>
            <Link to="/ayuda" className='flex gap-2  shadow-sm text-slate-500 rounded-lg hover:bg-cyan-500 hover:shadow-xl hover:text-white
           hover:shadow-cyan-500/50'>
              <img className='pl-2' src={img.helpIcon} alt=''></img>
              <p  className='block'>Ayuda</p>
            </Link>
          </li>
          <li>
            <Link  to ="/logIn" className='flex gap-2  shadow-sm text-slate-500 rounded-lg hover:bg-cyan-500 hover:shadow-xl hover:text-white
           hover:shadow-cyan-500/50'>
              <img className='pl-2' src={img.logoutIcon} alt=''></img>
              <p  className='block'>Salir</p>
            </Link>
          </li>

          
        </ul>
      </section>
    </div>
    </div>
    
  )
}
