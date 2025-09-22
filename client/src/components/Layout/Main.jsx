import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Users } from '../../pages/Users';
import { Inventarios } from '../../pages/Inventarios';
import { LogIn } from '../../pages/LogIn';


export const Main = () => {
  return (
    <div className='w-[85vw] h-[80vh] p-7'>
     
      <Routes>
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/users" element={<Users />} />
        <Route path="/inventarios" element={<Inventarios />} />
      </Routes>
    </div>
  );
};