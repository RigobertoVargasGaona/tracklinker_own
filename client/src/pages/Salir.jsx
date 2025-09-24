import React from 'react'
import { Aside } from '../components/Layout/Aside'
import { Nav } from '../components/Layout/Nav'

export const Salir = () => {
  return (
        <div className='flex'>
                <Aside />
                <div>
                    <Nav/>
                   Salir
                </div>
            </div>
  )
}
