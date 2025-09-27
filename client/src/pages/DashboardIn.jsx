import React from 'react'
import { Aside } from '../components/Layout/Aside'
import { Nav } from '../components/Layout/Nav'
import { Link } from 'react-router-dom'

export const DashboardIn = () => {
  return (
     <div className='flex w-[100vw] gap-10 '>
          <Aside />
          <div className='flex flex-wrap' >
            <Nav />
            <div className='  wrap h-[93vh] p-4 w-[80vw] grid grid-cols-10 grid-rows-6 gap-3'>
              <div  class=" shadow-lg  shadow-slate-400 col-span-2 rounded-xl row-span-2"></div>
              <div class="  shadow-lg  shadow-slate-400  col-span-2 rounded-xl row-span-2"></div>
              <div class="  shadow-lg  shadow-slate-400  col-span-2 rounded-xl row-span-2"></div>
              <div class="  shadow-lg  shadow-slate-400  col-span-2 rounded-xl row-span-2"></div>
              <div class="  shadow-lg  shadow-slate-400  col-span-2 rounded-xl row-span-2"></div>
              <div className=' shadow-lg  shadow-slate-400  rounded-xl col-span-4 row-span-2'></div>
              <div className=' shadow-lg  shadow-slate-400  rounded-xl col-span-3 row-span-2 '></div>
              <div className=' shadow-lg  shadow-slate-400  rounded-xl col-span-3 row-span-4 '></div>
              <div className=' shadow-lg  shadow-slate-400  rounded-xl col-span-4 row-span-2'></div>
              <div className=' shadow-lg  shadow-slate-400  rounded-xl col-span-3 row-span-2 '></div>
            </div>
          </div>
      </div>
      

  )
}
