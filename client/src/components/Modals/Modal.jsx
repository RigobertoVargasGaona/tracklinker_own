
import React from 'react';

// Recibe isOpen y onClose de las props
export default function Modal ({ isOpen, onClose }) { 
    


  return (
 <>
  {
   
    isOpen && (
     <div 
          className='fixed inset-0 bg-black bg-opacity-30  flex justify-center items-center'
          onClick={onClose} 
        >
     <div className='w-[40dvw] h-[80dvh] rounded-xl bg-white p-5 text-center'
            onClick={e => e.stopPropagation()} // EVITA que el clic en el contenido cierre el modal
          >
            <p>Agregar Usuario</p>
            <div className='h-[75dvh] space-x-5 flex justify-center items-end pb-5'>
             

              <button className='bg-red-400 w-24 h-10 hover:bg-red-600 p-2 rounded-lg hover:text-white' onClick={onClose}>Cancelar</button>
              <button className='bg-green-400 w-24 h-10 hover:bg-green-600 p-2 rounded-lg hover:text-white' >Agregar</button>
             

            </div>

          </div>
     </div>
    )
  } 
  </>
 );
}