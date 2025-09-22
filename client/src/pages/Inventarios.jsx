import React from 'react'
import { Aside } from '../components/Layout/Aside'
import { Nav } from '../components/Layout/Nav'



export const Inventarios = () => {
  return (
     
    <div className='flex'>
        <Aside />
        <div>
            <Nav/>
            Inventarios
        </div>
    </div>
  )
}
