
import './App.css';
import { LogIn } from './pages/LogIn';
import { Dashboard } from './pages/Dashboard';
import { Inventarios } from './pages/Inventarios';
import { Users } from './pages/Users';
import { DashboardIn } from './pages/DashboardIn';
import { Transformacion } from './pages/Transformacion';
import { Garantias } from './pages/Garantias';
import { Informes } from './pages/Informes';
import { Ayuda } from './pages/Ayuda';
import { Salir } from './pages/Salir';



import {BrowserRouter, Routes, Route , Navigate} from 'react-router-dom';

function App() {
  document.title="Tracklinker";
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='*' element={<Navigate to ="/login"/>}/>
        <Route  path='/login' element={<LogIn/>}/>
        <Route path="/inventarios" element={<Inventarios />} />
        <Route  path='/dashboard' element={<Dashboard />}/>
        <Route  path='/users' element={<Users />}/>
        <Route  path='/dashboardIn' element={<DashboardIn />}/>
        <Route  path='/transformacion' element={<Transformacion />}/>
        <Route  path='/garantias' element={<Garantias />}/>
        <Route  path='/informes' element={<Informes />}/>
        <Route  path='/ayuda' element={<Ayuda />}/>
        <Route  path='/salir' element={<Salir />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
