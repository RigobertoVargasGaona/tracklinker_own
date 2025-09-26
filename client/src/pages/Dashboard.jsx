import React from 'react';

import { Aside } from '../components/Layout/Aside';
import { Nav } from '../components/Layout/Nav';
import { Main } from '../components/Layout/Main';

export const Dashboard = () => {
  return (
    
      <div className='flex '>
        <Aside />
        <div className='w-[80vw] '>
          <Nav />
          <Main />
          
        </div>
      </div>
  
  );
};