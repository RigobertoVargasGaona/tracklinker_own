
import './App.css';
import { LogIn } from './pages/LogIn';
import { Dashboard } from './pages/Dashboard';

import {BrowserRouter, Routes, Route , Navigate} from 'react-router-dom';

function App() {
  document.title="Tracklinker";
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='*' element={<Navigate to="/login"/>}/>
        <Route  path='/login' element={<LogIn/>}/>
        <Route  path='/dashboard' element={<Dashboard/>}/>
         
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
