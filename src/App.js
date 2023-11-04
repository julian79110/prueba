import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Paginas/auth/login';
import Register from './Paginas/auth/register';
import Home from './Paginas/admin/home';
import Citas from './Paginas/admin/citas_admin';

function App() {
  return (
   <Fragment>
      <Router>
          <Routes>
              <Route path="/" element={<Login/>}></Route>
              <Route path="/register" element={<Register/>}></Route>
              <Route path="/home" element={<Home/>}></Route>
              <Route path="/citas" element={<Citas/>}></Route>
          </Routes>
      </Router>
   </Fragment>
  );
}

export default App;
