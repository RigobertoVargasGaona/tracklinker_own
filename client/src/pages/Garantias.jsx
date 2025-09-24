import React from 'react'
import { Aside } from '../components/Layout/Aside'
import { Nav } from '../components/Layout/Nav'

export const Garantias = () => {
  return (
      <div className='flex'>
              <Aside />
              <div>
                  <Nav/>
                  Garantias
              </div>
          </div>
        )
}
