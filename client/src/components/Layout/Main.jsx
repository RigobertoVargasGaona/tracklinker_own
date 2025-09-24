import React from 'react';
import { DashboardIn } from '../../pages/DashboardIn';
import { Link } from 'react-router-dom';

export const Main = () => {
  return (
    <div className='mx-10  px-32 w-[80vw] h-[93vh]  ' >
      <div className='p-60 justify-between gap-10 flex flex-wrap '>
        <div>
        <Link>
            <div className=' h-36 w-36 rounded-md shadow-sm shadow-slate-400 hover:bg-cyan-500 hover:shadow-xl hover:text-white
            hover:shadow-cyan-500/50'>
            </div>
            <p>Inventarios</p> 
        </Link>
        </div>    
        <div>
        <Link>
            <div className=' h-36 w-36 rounded-md shadow-sm shadow-slate-400 hover:bg-cyan-500 hover:shadow-xl hover:text-white
            hover:shadow-cyan-500/50'>
            </div>
            <p>Dashboard</p> 
        </Link>
        </div>    
        <div>
        <Link>
            <div className=' h-36 w-36 rounded-md shadow-sm shadow-slate-400 hover:bg-cyan-500 hover:shadow-xl hover:text-white
            hover:shadow-cyan-500/50'>
            </div>
            <p>Usuarios</p> 
        </Link>
        </div>    
        <div>
        <Link>
            <div className=' h-36 w-36 rounded-md shadow-sm shadow-slate-400 hover:bg-cyan-500 hover:shadow-xl hover:text-white
            hover:shadow-cyan-500/50'>
            </div>
            <p>Transformación</p> 
        </Link>
        </div>    
        <div>
        <Link>
            <div className=' h-36 w-36 rounded-md shadow-sm shadow-slate-400 hover:bg-cyan-500 hover:shadow-xl hover:text-white
            hover:shadow-cyan-500/50'>
            </div>
            <p>Garantías</p> 
        </Link>
        </div>    
        <div>
        <Link>
            <div className=' h-36 w-36 rounded-md shadow-sm shadow-slate-400 hover:bg-cyan-500 hover:shadow-xl hover:text-white
            hover:shadow-cyan-500/50'>
            </div>
            <p>Informes</p> 
        </Link>
        </div>    
        <div>
        <Link>
            <div className=' h-36 w-36 rounded-md shadow-sm shadow-slate-400 hover:bg-cyan-500 hover:shadow-xl hover:text-white
            hover:shadow-cyan-500/50'>
            </div>
            <p>Ayuda</p> 
        </Link>
        </div>    
        <div>
        <Link>
            <div className=' h-36 w-36 rounded-md shadow-sm shadow-slate-400 hover:bg-cyan-500 hover:shadow-xl hover:text-white
            hover:shadow-cyan-500/50'>
            </div>
            <p>Salir</p> 
        </Link>
        </div>    
        
        
      </div>     
    </div>
  );
};