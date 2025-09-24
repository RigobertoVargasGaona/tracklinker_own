import React from 'react'
import { Aside } from '../components/Layout/Aside'
import { Nav } from '../components/Layout/Nav'

export const Transformacion = () => {
  return (
    <div className='flex'>
            <Aside />
            <div>
                <Nav/>
                Tranformacion
            </div>
        </div>

  )
}
