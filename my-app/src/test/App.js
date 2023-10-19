import { NavBar } from './NavBar';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Newton from './Interpolation/Newton';
import Lagrange from './Interpolation/Lagrange';

import Gauss_elimination from './Solutions Root of equation/Gauss_elimination';
import Gauss_Jordan from './Solutions Root of equation/Gauss_Jordan';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
      
        <Route path='/Newton' element={<Newton/>}/>
        <Route path='/Lagrange' element={<Lagrange/>}/>

        <Route path='/Gauss_elimination' element={<Gauss_elimination/>}/>
        <Route path='/Gauss_Jordan' element={<Gauss_Jordan/>}/>
        
        
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
