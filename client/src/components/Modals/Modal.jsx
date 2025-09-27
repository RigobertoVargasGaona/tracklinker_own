
import React from 'react';
import { img } from '../../assets/img';

// Recibe isOpen y onClose de las props
export default function Modal ({ isOpen, onClose, children }) { 
    


  return (
 <>
  {
   
    isOpen && (
     <div 
          className='fixed inset-0 bg-black bg-opacity-30  flex justify-center items-center'
          onClick={onClose} 
        >
     <div className='w-[40dvw] rounded-xl bg-white p-5 text-center'
            onClick={e => e.stopPropagation()} // EVITA que el clic en el contenido cierre el modal
          ><div className='flex justify-between items-center'>
            <p className=''>Agregar Usuario</p>
            <button className='  text-xl hover:bg-slate-200 rounded-3xl transition duration-400'  onClick={onClose}>
              <img className="rounded-lg p-1.5"src={img.closetIcon} alt="" />
            </button>

          </div>
            <div className=' flex flex-col justify-center items-center pb-5'>
             <div className='p-5'>
              {children}
             </div>
              <div className='space-x-5'>
                <button className='  h-10 hover:bg-red-600 p-2 rounded-lg hover:text-white transition duration-400' onClick={onClose}>Cancelar</button>
                <button className='bg-green-400 w-24 h-10 hover:bg-green-600 p-2 rounded-lg hover:text-white transition duration-400' >Agregar</button>
              </div>
            
            </div>

          </div>
     </div>
    )
  } 
  </>
 );
}