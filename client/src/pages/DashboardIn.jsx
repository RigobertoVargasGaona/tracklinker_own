import React from 'react'
import { Aside } from '../components/Layout/Aside'
import { Nav } from '../components/Layout/Nav'

export const DashboardIn = () => {
  return (
     <div className='flex flex-row w-[100vw]'>
          <Aside />
          <div className='flex flex-wrap' >
            <Nav />
            <div className='h-screen w-screen grid grid-flow-col grid-rows-3 gap-4 bg-red-400'>
              <div class="row-span-3 ...">01</div>
                <div class="col-span-2 ...">02</div>
                <div class="col-span-2 row-span-2 ...">03</div>
            </div>
           </div>
      </div>
      

  )
}
