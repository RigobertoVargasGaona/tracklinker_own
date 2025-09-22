import React from 'react';
import { Route } from 'react-router-dom'; // Importa BrowserRouter
import { Aside } from '../components/Layout/Aside';
import { Nav } from '../components/Layout/Nav';
import { Main } from '../components/Layout/Main';

export const Dashboard = () => {
  return (
    
      <div className='flex '>
        <Aside />
        <div>
          <Nav />
          <Main />
        </div>
      </div>
  
  );
};