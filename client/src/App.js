
import './App.css';
import { LogIn } from './pages/LogIn';
import { Dashboard } from './pages/Dashboard';
import { Inventarios } from './pages/Inventarios';


import {BrowserRouter, Routes, Route , Navigate} from 'react-router-dom';
import { Users } from './pages/Users';

function App() {
  document.title="Tracklinker";
  return (
    <BrowserRouter>
    
      <Routes>
        
        <Route  path='/login' element={<LogIn/>}/>
        <Route path="/inventarios" element={<Inventarios />} />
        <Route  path='/dashboard' element={<Dashboard />}/>
        <Route  path='/users' element={<Users />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
