import { NavBar } from './NavBar';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Newton from './test/Newton';
import Lagrange from './test/Lagrange';
import Bisection from './test/Bisection';
import Onepoint from './test/Onepoint';
import Falseposition from './test/Falseposition';
import Gauss_elimination from './test/Gausselimination';
import Secant from './test/Secant';
import Graphical from './test/Graphical';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
      
        <Route path='/Newton' element={<Newton/>}/>
        <Route path='/Lagrange' element={<Lagrange/>}/>
        <Route path='/Bisection' element={<Bisection/>}/>
        <Route path='/Onepoint' element={<Onepoint/>}/>
        <Route path='/Falseposition' element={<Falseposition/>}/>
        <Route path='/Gauss_elimination' element={<Gauss_elimination/>}/>
        <Route path='/Secant' element={<Secant/>}/>
        <Route path='/Graphical' element={<Graphical/>}/>




      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
