import React from 'react'
import EmpCreate from './EmpCreate'
import EmpEdit from './EmpEdit'
import Remove from './Remove'
import EmptyListing from './EmptyListing';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import EmpDetails from './EmpDetails';


function App() {
  return (
    <div className="App">
      <h1> CRUD in React.JS</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmptyListing/>}></Route>
        <Route path='/EmpCreate' element={<EmpCreate />}></Route>
        <Route path='/EmpEdit/:id' element={<EmpEdit />}></Route>
        <Route path='EmpDetails/:id' element={<EmpDetails />}></Route>
        <Route path='/Remove' element={<Remove />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;