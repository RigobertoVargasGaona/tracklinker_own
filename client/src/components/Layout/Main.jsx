import React from 'react';
import { Link } from 'react-router-dom';
import {img} from '../../assets/img.js';

export const Main = () => {
  return (
    <div className='mx-10  px-32 w-[80vw] h-[93vh]  ' >
      <div className='p-60 justify-between gap-10 flex flex-wrap text-center '>
        <div>
        <Link to ='/inventarios'>
            <div className=' h-36 w-36 rounded-md shadow-sm shadow-slate-400 hover:bg-cyan-500 hover:shadow-xl hover:text-white
            hover:shadow-cyan-500/50'>
              <div className='p-10'>
                <img className=' w-16' src={img.inventoryIcon} alt=''></img>
              </div>
            </div>
            <p>Inventarios</p> 
        </Link>
        </div>    
        <div>
        <Link to='/dashboardIn'>
            <div className=' h-36 w-36 rounded-md shadow-sm shadow-slate-400 hover:bg-cyan-500 hover:shadow-xl hover:text-white
            hover:shadow-cyan-500/50'>
               <div className='p-10'>
                  <img className='w-16' src={img.cardIcon} alt=''></img>
              </div>
            </div>
            <p>Dashboard</p> 
        </Link>
        </div>    
        <div>
        <Link to ='/users'>
            <div className=' h-36 w-36 rounded-md shadow-sm shadow-slate-400 hover:bg-cyan-500 hover:shadow-xl hover:text-white
            hover:shadow-cyan-500/50'>
                <div className='p-10'>
                  <img className='w-16' src={img.usersIcon} alt=''></img>
                </div>
            </div>
            <p>Usuarios</p> 
        </Link>
        </div>    
        <div>
        <Link to='/transformacion' >
            <div className=' h-36 w-36 rounded-md shadow-sm shadow-slate-400 hover:bg-cyan-500 hover:shadow-xl hover:text-white
            hover:shadow-cyan-500/50'>
                <div className='p-10'>
                  <img className='w-16' src={img.transformIcon} alt=''></img>
                </div>
            </div>
            <p>Transformación</p> 
        </Link>
        </div>    
        <div>
        <Link to='/garantias' >
            <div className=' h-36 w-36 rounded-md shadow-sm shadow-slate-400 hover:bg-cyan-500 hover:shadow-xl hover:text-white
            hover:shadow-cyan-500/50'>
              <div className='p-10'>
                <img className='w-16' src={img.ticketsIcon} alt="" />
              </div>
            </div>
            <p>Garantías</p> 
        </Link>
        </div>    
        <div>
        <Link to='/informes'>
            <div className=' h-36 w-36 rounded-md shadow-sm shadow-slate-400 hover:bg-cyan-500 hover:shadow-xl hover:text-white
            hover:shadow-cyan-500/50'>
               <div className='p-10'>
                <img className='w-16' src={img.reportsIcon} alt="" /> 
              </div>
            </div>
            <p>Informes</p> 
        </Link>
        </div>    
        <div>
        <Link to="/ayuda">
            <div className=' h-36 w-36 rounded-md shadow-sm shadow-slate-400 hover:bg-cyan-500 hover:shadow-xl hover:text-white
            hover:shadow-cyan-500/50'>
              <div className='p-10'>
                <img className='w-16' src={img.helpIcon} alt=''></img>
              </div>
            </div>
            <p>Ayuda</p> 
        </Link>
        </div>    
        <div>
        <Link to ="/logIn">
            <div className=' h-36 w-36 rounded-md shadow-sm shadow-slate-400 hover:bg-cyan-500 hover:shadow-xl hover:text-white
            hover:shadow-cyan-500/50'>
               <div className='p-10'>
                <img className='w-16' src={img.logoutIcon} alt=''></img>
              </div>
            </div>
            <p>Salir</p> 
        </Link>
        </div>    
        
        
      </div>     
    </div>
  );
};