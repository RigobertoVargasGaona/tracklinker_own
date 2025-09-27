import React from 'react'
import {img} from '../../assets/img.js';
import { NavLink, Link } from 'react-router-dom' 


export const Aside = () => {
  return (
    <div className='h-[100vh]'>
      <div className='text-center  xl:w-[15vw] w-[120px] bg-slate-200 font-serif text-2xl'>
          
        <section className='h-[20vh] pt-3  flex  items-center  pl-6 pr-6' >
          <NavLink to="/dashboard" className='flex gap-2  text-slate-500' >
              <img className=' w-16' src={img.userIcon} alt=''></img>
              <p href='#' className='text-left text-wrap hidden  xl:block'>Rigoberto Vargas Gaona</p>
            </NavLink>
        </section>
        <section className='h-[50vh] pt- flex flex-col'>
        Menú
          <ul className='text-left  flex flex-col  justify-between gap-y-5 mt-4 pl-6 pr-6 '>
            <li>
              <NavLink to ='/inventarios' className={ ({isActive}) => 
              ` flex flex-wrap justify-center gap-2 px-3 py-2  shadow-sm text-slate-500 rounded-lg
              xl:justify-start
              hover:bg-cyan-500 hover:shadow-xl hover:text-white
                hover:shadow-cyan-500/50
                ${isActive
                  ? "bg-black"
                  : ""
                }
                `}>
                <img className='' src={img.inventoryIcon} alt=''></img>
                <p  className='hidden  xl:block'>Inventarios</p>
                  
              </NavLink>
            </li>
            <li>
              <NavLink to='/dashboardIn' className=' flex flex-wrap justify-center gap-2 px-3 py-2  shadow-sm text-slate-500 rounded-lg
              xl:justify-start
              hover:bg-cyan-500 hover:shadow-xl hover:text-white
                hover:shadow-cyan-500/50' >
                <img className='' src={img.cardIcon} alt=''></img>
                <p  className='hidden  xl:block'>Dashboard</p>
              </NavLink>
            </li>

            <li>
              <NavLink  to ='/users'  className='flex flex-wrap justify-center gap-2 px-3 py-2  shadow-sm text-slate-500 rounded-lg
              xl:justify-start
              hover:bg-cyan-500 hover:shadow-xl hover:text-white hover:shadow-cyan-500/50'>
                  <img className='' src={img.usersIcon} alt=''></img>
                  <p  className='hidden  xl:block'>Usuarios</p>
              </NavLink>
            </li>

            <li>
              <NavLink to='/transformacion'  className='flex flex-wrap justify-center gap-2 px-3 py-2  shadow-sm text-slate-500 rounded-lg
              xl:justify-start
              hover:bg-cyan-500 hover:shadow-xl hover:text-white
                hover:shadow-cyan-500/50'>
                <img className='' src={img.transformIcon} alt=''></img>
                <p  className='hidden  xl:block' block>Transformación</p>
              </NavLink>
            </li>

            <li>
              <NavLink to='/garantias' className='flex flex-wrap justify-center gap-2 px-3 py-2  shadow-sm
              xl:justify-start
              text-slate-500 rounded-lg hover:bg-cyan-500 hover:shadow-xl hover:text-white
                hover:shadow-cyan-500/50'>
                <img className='' src={img.ticketsIcon} alt="" />
                <p className='hidden  xl:block'>Garantias</p>
              </NavLink>
            </li>

            <li>
              <NavLink to='/informes' className='flex flex-wrap justify-center gap-2 px-3 py-2  shadow-sm 
              xl:justify-start
              text-slate-500 rounded-lg hover:bg-cyan-500 hover:shadow-xl hover:text-white
                hover:shadow-cyan-500/50'>
              <img className='' src={img.reportsIcon} alt="" /> 
              <p className='hidden  xl:block' block>Informes</p>
              </NavLink>
            </li>
          </ul>
        </section>
        <section className='h-[30vh] pt-3 '>Otros
          <ul className='text-left  flex flex-col justify-between gap-y-5 mt-4 pl-5 pr-5'>
            
            
            <li>
              <NavLink to="/ayuda" className='flex flex-wrap justify-center gap-2 px-3 py-2  shadow-sm
              xl:justify-start
              text-slate-500 rounded-lg hover:bg-cyan-500 hover:shadow-xl hover:text-white
            hover:shadow-cyan-500/50'>
                <img className='' src={img.helpIcon} alt=''></img>
                <p  className='hidden  xl:block'>Ayuda</p>
              </NavLink>
            </li>
            <li>
              <NavLink  to ="/logIn" className='flex flex-wrap justify-center gap-2 px-3 py-2  shadow-sm
              xl:justify-start
              text-slate-500 rounded-lg hover:bg-cyan-500 hover:shadow-xl hover:text-white
            hover:shadow-cyan-500/50'>
                <img className='' src={img.logoutIcon} alt=''></img>
                <p  className='hidden  xl:block'>Salir</p>
              </NavLink>
            </li>

            
          </ul>
        </section>
      </div>
    </div>
    
  )
}
