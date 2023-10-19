import { NavBar } from './NavBar';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Newton from './test/Newton';
import Lagrange from './test/Lagrange';
import Bisection from './test/Bisection';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
      
        <Route path='/Newton' element={<Newton/>}/>
        <Route path='/Lagrange' element={<Lagrange/>}/>
        <Route path='/Bisection' element={<Bisection/>}/>


      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
